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
        WHERE carts.user_id=${cart_id}
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

// ** unsure of id's identified
async function deleteCurrentCart({ user_id }) {
  await client.query(
    `
    DELETE FROM carts
    WHERE cart.user_id=${cart_id}
    `
  );
  await client.query(
    `
    DELETE FROM cart_products
    WHERE id=${cart_product_id}
    `
  );
}

async function getPurchaseHistoryByUser({ user_id }) {
  // select and return an array of all routines
  try {
    const { rows } = await client.query(
      `
        SELECT carts.*, users.username AS "creatorName" 
        FROM routines
        JOIN users ON routines."creatorId" = users.id AND users.username = $1;
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
  updateCartPurchasedStatus,
  deleteCurrentCart,
  getPurchaseHistoryByUser,
};
