const client = require('./client');

async function createOrder({ cart_id, address_id, shipped }) {
  console.log('Starting to create Order.. db/order.js');
  try {
    const {
      rows: [order],
    } = await client.query(
      `
              INSERT INTO orders
              (cart_id, address_id, shipped) 
              VALUES($1, $2, $3)
              RETURNING *;
            `,
      [cart_id, address_id, shipped]
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
