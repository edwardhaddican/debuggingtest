const client = require('./client');
const { attachProductsToCarts } = require('./cart_products');

async function createCart({ user_id, purchased }) {
  console.log('Starting to create Cart.. db/carts.js');
  try {
    console.log(user_id, purchased, "INSIDE OF TRY IN BACKEND DB")
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
    console.error (error)
    throw error;
  }
}

async function getCurrentCart({ user_id }) {
  try {
    const {
      rows: cart,
    } = await client.query(
      `
            SELECT * FROM carts
            WHERE carts.user_id = $1
            AND purchased = false;
            `,
      [user_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Getting Current Cart! db/carts.js');
    throw error;
  }
}

async function updateCartPurchaseStatus({ user_id }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
        UPDATE carts
        SET purchased = true
        WHERE carts.user_id=${cart_id}
        RETURNING *;
      `,
      [user_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Updating Cart Purchase Status! db/carts.js');
    throw error;
  }
}

// **
async function deleteCurrentCart({ user_id }) {
  try {
    await client.query(
      `
    DELETE FROM carts.*
    WHERE cart.user_id=${cart_id}
    AND purchased = false;
    `[user_id]
    );
    await client.query(
      `
    DELETE FROM cart_products.*
    WHERE cart_products.cart_id=${cart_product_id}
    `
    );
  } catch (error) {
    console.error('Error Deleting Current Cart!');
    throw error;
  }
}

async function getPurchaseHistoryByUser({ user_id }) {
  try {
    const { rows } = await client.query(
      `
      
      `,
      [user_id]
    );

    return attachProductsToCarts(rows);
  } catch (error) {
    console.error('Error getting Purchase History by User!');
    throw error;
  }
}

module.exports = {
  createCart,
  getCurrentCart,
  updateCartPurchaseStatus,
  deleteCurrentCart,
  getPurchaseHistoryByUser,
};
