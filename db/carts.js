const client = require('./client');

async function createCart({
  product_id,
  user_id,
  product_name,
  cart_product_quantity,
  price_each,
  purchased,
}) {
  console.log('Starting to create Cart.. db/carts.js');
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
          INSERT INTO carts
          (product_id,
            user_id,
            product_name,
            cart_product_quantity,
            price_each,
            purchased) 
          VALUES($1, $2, $3, $4, $5, $6)
          RETURNING *;
        `,
      [
        product_id,
        user_id,
        product_name,
        cart_product_quantity,
        price_each,
        purchased,
      ]
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

async function getAllCartsByUser({ user_id }) {
  try {
    const { rows: carts } = await client.query(
      `
        SELECT carts.*,
        FROM carts
        carts.user_id = $1;
      `,
      [user_id]
    );

    return attachCartProducts(carts);
  } catch (error) {
    console.error('Error getting cart history by user id!');
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
  getAllCartsByUser,
  updateCartPurchasedStatus,
  deleteCurrentCart,
};
