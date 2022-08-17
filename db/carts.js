const client = require('./client');

async function createCart({ user_id, purchased }) {
  console.log('Starting to create Cart.. db/carts.js');
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
          INSERT INTO carts
          (user_id, purchased) 
          VALUES($1, $2)
          RETURNING *;
        `,
      [user_id, purchased]
    );
    console.log('Cart created..');
    console.log(cart);
    console.log('Finished Creating Cart! carts.js');
    return cart;
  } catch (error) {
    console.error('Error Creating Cart! db/carts.js');
    throw error;
  }
}

async function getCurrentCart({ user_id }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            SELECT * FROM carts,
            WHERE carts.user_id = $1,
            AND purchased = false,
            `,
      [user_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Getting Current Cart! db/carts.js');
    throw error;
  }
}

async function updateCartPurchasedStatus({ user_id }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
        UPDATE carts
        SET purchased = true
        WHERE cart_id=${id}
        RETURNING *;
      `,
      [user_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Updating Cart Purchased Status! db/carts.js');
    throw error;
  }
}

async function deleteCurrentCart({ user_id }) {
  await client.query(
    `
    DELETE FROM cart_products
    WHERE "cart_id"=${id}
    `
  );
  await client.query(
    `
    DELETE FROM carts
    WHERE id=${user_id}
    `
  );
}
module.exports = {
  createCart,
  getCurrentCart,
  updateCartPurchasedStatus,
  deleteCurrentCart,
};
