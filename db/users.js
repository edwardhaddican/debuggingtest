const client = require('./client');
const bcrypt = require('bcrypt');

async function createUser({ username, password }) {
  console.log('Starting to create user! users.js');
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(username, password) 
        VALUES($1, $2) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING id, username;
      `,
      [username, hashedPassword]
    );

    console.log('User created: ..');
    console.log(user);
    console.log('Finished Creating user! users.js');
    return user;
  } catch (error) {
    console.error('Error Creating User! users.js');
    throw error;
  }
}

async function getUser({ username, password }) {
  const user = await getUserByUsername(username);
  const hashedPassword = user.password;
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);
  if (passwordsMatch) {
    try {
      const {
        rows: [user],
      } = await client.query(
        `
        SELECT id, username
        FROM users
        WHERE username=$1 AND password=$2;
        `,
        [username, hashedPassword]
      );

      return user;
    } catch (error) {
      console.error('Error getting user by username! users.js');
      throw error;
    }
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
    SELECT id, username     
    FROM users
    WHERE id=${userId};
    `);
    return user;
  } catch (error) {
    console.error('Error getting user by id! users.js');
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
    console.error('Error getting user by username! users.js');
    throw error;
  }
}

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
      [username]
    );

    return user;
  } catch (error) {
    console.error('Error getting user by email! users.js');
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
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
