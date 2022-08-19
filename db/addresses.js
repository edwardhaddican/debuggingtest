const client = require('./client');

async function createAddress({ user_id, phone_number, street01, street02, city, state, zipcode }) {
    console.log('Starting to create Cart.. db/carts.js');
    try {
      const {
        rows: [cart],
      } = await client.query(
        `
            INSERT INTO addresses
            (user_id, phone_number, street01, street02, city, state, zipcode) 
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
          `,
        [user_id, phone_number, street01, street02, city, state, zipcode]
      );
      console.log('Address created..');
      console.log(cart);
      console.log('Finished Creating Address! address.js');
      return address;
    } catch (error) {
      console.error (error)
      throw error;
    }
  }

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

module.exports = {};




