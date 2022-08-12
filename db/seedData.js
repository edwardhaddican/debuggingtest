const { createUser } = require('./users');
const { createProduct, getProduct } = require('./products');
//const { createProduct_Size } = require('./product_sizes');
const client = require('./client');
async function dropTables() {
  try {
    console.log('Starting To Drop Tables...');
    await client.query(`
    
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS addresses;
    DROP TABLE IF EXISTS cart_products;
    DROP TABLE IF EXISTS carts;
    DROP TABLE IF EXISTS product_sizes;
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
      email VARCHAR (255) UNIQUE NOT NULL,
      password VARCHAR (255) NOT NULL,
      first_name VARCHAR (255) NOT NULL,
      last_name VARCHAR (255) NOT NULL,
      username VARCHAR (255) UNIQUE NOT NULL,
      user_active BOOLEAN DEFAULT true,
      admin_active BOOLEAN DEFAULT false
 );`);
    await client.query(`
    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      gender VARCHAR (255) NOT NULL,
      product_name VARCHAR (255) NOT NULL,
      description VARCHAR (255),
      size VARCHAR (255) NOT NULL,
      price VARCHAR (9) NOT NULL,
      availability BOOLEAN DEFAULT true,
      quantity_instock INTEGER
  );`);
    /*    await client.query(`
    CREATE TABLE product_sizes (
      id SERIAL PRIMARY KEY,
      size VARCHAR (2),
      product_id INTEGER REFERENCES products(id)
  );`);
 */
    await client.query(` 
    CREATE TABLE carts (
      id SERIAL PRIMARY KEY,
      purchased BOOLEAN DEFAULT false,
      user_id INTEGER REFERENCES users(id)
  );`);
    await client.query(`  
    CREATE TABLE cart_products (
      id SERIAL PRIMARY KEY,
      cart_id INTEGER REFERENCES carts(id),
      product_id INTEGER REFERENCES products(id),
      quantity INTEGER NOT NULL,
      total_price VARCHAR (10) NOT NULL
  );`);
    await client.query(`  
  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    phone_number VARCHAR (10),
    street01 VARCHAR (255) NOT NULL,
    street02 VARCHAR (255),
    city VARCHAR (255),
    state VARCHAR (2),
    zipcode VARCHAR (10)
  );`);
    await client.query(`  
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES carts(id),
  shipped BOOLEAN default false
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
        email: 'aliataha2206@gmail.com',
        password: 'zuzu',
        first_name: 'Alia',
        last_name: 'Taha',
        username: 'aliataha',
        user_active: true,
        admin_active: true,
      },
      {
        email: 'tannermonaco2206@gmail.com',
        password: '418argyle',
        first_name: 'Tanner',
        last_name: 'Monaco',
        username: 'tannerazm',
        user_active: true,
        admin_active: true,
      },
      {
        email: 'lucasmaul2206@gmail.com',
        password: 'starfox',
        first_name: 'Lucas',
        last_name: 'Maul',
        username: 'lmaul',
        user_active: true,
        admin_active: true,
      },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error('Error creating users seedData.js!');
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log('Starting to create products...');
    const productsToCreate = [
      {
        product_name: 'Shorline Short Sleeves',
        description: 'Fly Away Top',
        gender: "Men's",
        size: 'Small',
        price: 30.0,
        availability: true,
        quantity_instock: 11,
      },
      {
        product_name: 'Laguna Long Sleeves',
        description: 'Seamless Tiny Top',
        gender: "Women's",
        size: 'Medium',
        price: 45.0,
        availability: true,
        quantity_instock: 23,
      },
      {
        product_name: 'Boardwalk Button Downs',
        description: 'Long Sleeve Oversized Shirt',
        gender: "Men's",
        size: 'Large',
        price: 50.0,
        availability: true,
        quantity_instock: 6,
      },
      {
        product_name: 'Hidden Hills Hoodies',
        description: 'Stone Washed Hoodie Sweatshirt',
        gender: "Women's",
        size: 'Xtra-Large',
        price: 75.0,
        availability: true,
        quantity_instock: 9,
      },
    ];
    const products = await Promise.all(productsToCreate.map(createProduct));

    console.log('Products Created:');
    console.log(products);
    console.log('Finished Creating Products! db/seedData.js');
  } catch (error) {
    console.error('Error Creating Products! db/seedData.js');
    throw error;
  }
}

/*
async function createInitialProduct_Sizes() {
  try {
    console.log('Starting to Create Product Sizes...');
    const product_sizesToCreate = [
      {
        size: 'S',
        product_id: 1,
      },
      {
        size: 'M',
        product_id: 2,
      },
      {
        size: 'L',
        product_id: 3,
      },
      {
        size: 'XL',
        product_id: 4,
      },
    ];
    const product_sizes = await Promise.all(
      product_sizesToCreate.map(createProduct_Size)
    );

    console.log('Product Sizes Created:');
    console.log(product_sizes);
    console.log('Finished Creating Product Sizes!');
  } catch (error) {
    console.error('Error Creating Product Sizes! db/seedData.js');
    throw error;
  }
}
*/

async function rebuildDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
    //   await createInitialProduct_Sizes();
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
  createInitialProducts,
  //  createInitialProduct_Sizes,
};
