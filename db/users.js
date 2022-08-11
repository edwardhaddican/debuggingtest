const client = require('./client')
const bcrypt = require('bcrypt');

async function createUser({
  username,
  password,
  first_name,
  last_name,
  email,
}) {
  console.log("Starting to create user! db/users.js");
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(username, password, first_name, last_name, email) 
        VALUES($1, $2, $3, $4, $5) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `,
      [username, hashedPassword, first_name, last_name, email]
    );

    console.log("User created: ..");
    console.log(user);
    console.log("Finished Creating user! users.js");
    return user;
  } catch (error) {
    console.error("Error Creating User! users.js");
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    console.log(user, "USER")
    const hashedPassword = user.password;

    const isValid = await bcrypt.compare(password, hashedPassword);

    if (isValid) {
      delete user.password;
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}

async function getUserById(user_Id) {
  try {
    const {
      rows: [user],
    } = await client.query(`
    SELECT id, username     
    FROM users
    WHERE id=${user_Id};
    `);
    return user;
  } catch (error) {
    console.error('Error getting user by id! db/users.js');
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username=$1;
      `,
      [username]
    );

    return user;
  } catch (error) {
    console.error('Error getting user by username! db/users.js');
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT *
        FROM users;
        `
  );
  return rows;
}

async function updateUser(id, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [user],
    } = await client.query(
      `
        UPDATE users
        SET ${setString}
        WHERE id=${id}
        RETURNING *;
        `,
      Object.values(fields)
    );

    return user;
  } catch (error) {
    throw error;
  }
}

/*
async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE email=$1;
      `,
      [email]
    );

    return user;
  } catch (error) {
    console.error('Error getting user by email! users.js');
    throw error;
  }
}
*/

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser
};

/*
const { client } = require('./index');
const bycrypt = require("bcrypt");


async function createUser() {
    console.log("Starting to creating user...");
    try{
const SALT_COUNT = 10;
const hashPassword = await bycrypt.hash(password, SALT_COUNT)
const {
    rows: [user],
} = await client.query(`
    INSERT INTO users()
        `)
    }
}


module.exports = {};
*/
