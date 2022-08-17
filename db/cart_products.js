const client = require('./client');

async function addCartPoductToCart({
  cart_id,
  product_id,
  cart_product_quantity,
  price_each,
}) {
  try {
    const {
      rows: [cart_product],
    } = await client.query(
      `
          INSERT INTO cart_products(
            cart_id,
            product_id,
            cart_product_quantity,
            price_each
            ) 
          VALUES($1, $2, $3, $4) 
          ON CONFLICT (product_id, cart_id) DO NOTHING
          RETURNING *;
        `,
      [cart_id, product_id, cart_product_quantity, price_each]
    );

    return cart_product;
  } catch (error) {
    console.error('Error Adding cart_product to Cart!');
    throw error;
  }
}

async function removeCartProduct(cart_product_id) {
  try {
    const {
      rows: [cart_product],
    } = await client.query(`
          DELETE FROM cart_products
          WHERE id=${cart_product_id}
          `);
    return cart_product;
  } catch (error) {
    console.error('Error Removing cart_product from Cart! db/products.js');
    throw error;
  }
}

module.exports = { addCartPoductToCart, removeCartProduct };
