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

async function getCurrentCart ({user_id}) {
    try {
        const {rows: [cart]} = await client.query(`
            SELECT * FROM carts,
            WHERE carts.user_id = $1,
            AND purchased = false,
            `,
            []);
    } catch (error) {
      throw error;
    }
}

module.exports = {
  createCart,
  getCurrentCart,
};
