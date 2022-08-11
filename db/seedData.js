const { createUser } = require('./users');
const {client} = require('./client');

async function dropTables() {
  try {
    console.log('Starting To Drop Tables...');
    await client.query(`
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS cart_products;
    DROP TABLE IF EXISTS carts;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
    `);
    console.log('Finished dropping tables!');
  } catch (error) {
    console.error('Error dropping tables!');
    throw error;
  }
}
//DROP TABLE IF EXISTS users;
async function createTables() {
  try {
    console.log('Starting to build tables...');
    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      admin BOOLEAN,
      username VARCHAR (255) UNIQUE NOT NULL,
      password VARCHAR (255) NOT NULL,
      first_name VARCHAR (255) NOT NULL,
      last_name VARCHAR (255) NOT NULL,
      email VARCHAR (255) NOT NULL,
      active BOOLEAN
 );`);
    await client.query(`
 CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      creator VARCHAR (255) NOT NULL,
      name VARCHAR (255) NOT NULL,
      price INTEGER,
      status BOOLEAN
      );`);
    await client.query(`     
 CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  "isOrdered" BOOLEAN,
  user_id INTEGER REFERENCES users(id)
  );`);
    await client.query(`  
CREATE TABLE cart_products (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES carts(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER
  );`);
    await client.query(`  
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES carts(id),
  status VARCHAR (255) NOT NULL
  );`);
    console.log('Finished building tables!');
  } catch (error) {
    console.error('Error building tables!');
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log('Starting to create users...');
    const usersToCreate = [
      {
        admin: true,
        username: 'aliataha',
        password: 'zuzu',
        first_name: 'Alia',
        last_name: 'Taha',
        email: 'aliataha2206@gmail.com',
        active: true
      },
      {
        admin: true,
        username: 'tannerazm',
        password: '418argyle',
        first_name: 'Tanner',
        last_name: 'Monaco',
        email: 'tannermonaco2206@gmail.com',
        active: true
      },
      {
        admin: true,
        username: 'lmaul',
        password: 'starfox',
        first_name: 'Lucas',
        last_name: 'Maul',
        email: 'lucasmaul2206@gmail.com',
        active: true
      },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error('Error creating users seed.js!');
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
  } catch (error) {
    console.error('Error during rebuild DB!!');
    throw error;
  }
}
module.exports = {
  rebuildDB,
  dropTables,
  createTables,
  createInitialUsers,
};
