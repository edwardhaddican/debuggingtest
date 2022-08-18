const client = require('./client');

async function addCartProductToCart({
  cart_id,
  product_id,
  quantity,
  sum_product_price,
}) {
  try {
    const {
      rows: [cart_product],
    } = await client.query(
      `
          INSERT INTO cart_products(
            cart_id,
            product_id,
            quantity,
            sum_product_price
            ) 
          VALUES($1, $2, $3, $4) 
          ON CONFLICT (product_id, cart_id) DO NOTHING
          RETURNING *;
        `,
      [cart_id, product_id, quantity, sum_product_price]
    );

    return cart_product;
  } catch (error) {
    console.error('Error Adding cart_product to Cart!');
    throw error;
  }
}

async function editCartProductQuantity({ user_id, quantity }) {
  try {
    const result = await client.query(
      `
          UPDATE cart_products
          SET quantity = $1
          WHERE cart_products.user_id= $2
        `,
      [user_id, quantity]
    );
    return result;
  } catch (error) {
    console.error('Error Editing Cart Product Quantity!');
    throw error;
  }
}

async function attachCartProductsToCart(carts) {
  const cartsToReturn = [...carts];
  const binds = carts.map((_, index) => `$${index + 1}`).join(', ');
  const cart_ids = carts.map((cart) => cart.id);
  if (!cart_ids?.length) return [];

try {
    const {rows: products} = await client.query(
        `
        SELECT products.id,
        products.gender,
        products.category,
        products.product_name,
        products.description,
        products.size,
        product.price,
        


        `
    )
}
}

async function deleteProductFromCart(cart_product_id) {
  try {
    await client.query(
      `
        DELETE FROM cart_products
        WHERE id=${cart_product_id}
        `
    );
  } catch (error) {
    console.error('Error Removing cart_product from Cart! db/products.js');
    throw error;
  }
}

module.exports = {
  addCartProductToCart,
  editCartProductQuantity,
  attachCartProductsToCart,
  deleteProductFromCart,
};

/*
// **moving to different file
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
*/
