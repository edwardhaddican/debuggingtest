const client = require('./client');

async function createOrder({
  user_id,
  phone_number,
  street01,
  street02,
  city,
  state,
  zipcode,
}) {
  console.log('Starting to create Order.. db/order.js');
  try {
    const {
      rows: [order],
    } = await client.query(
      `
              INSERT INTO orders
              (user_id, phone_number, street01, street02, city, state, zipcode) 
              VALUES($1, $2, $3, $4, $5, $6, $7)
              RETURNING *;
            `,
      [user_id, phone_number, street01, street02, city, state, zipcode]
    );
    console.log('Order created..');
    console.log(order);
    console.log('Finished Creating Order! order.js');
    return order;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createOrder };
