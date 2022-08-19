const client = require('./client');

async function createAddress({
  user_id,
  phone_number,
  street01,
  street02,
  city,
  state,
  zipcode,
}) {
  console.log('Starting to create Address.. db/addresses.js');
  try {
    const {
      rows: [address],
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
    console.log(address);
    console.log('Finished Creating Address! address.js');
    return address;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createAddress };
