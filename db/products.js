const client = require('./client');

async function createProduct({
  product_name,
  description,
  price,
  availability,
  quantity_instock,
}) {
  console.log('Starting to create Product! db/products.js');
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO products(
            product_name,
            description,
            price,
            availability,
            quantity_instock) 
        VALUES($1, $2, $3, $4, $5) 
        RETURNING *;
      `,
      [product_name, description, price, availability, quantity_instock]
    );

    console.log('User created: ..');
    console.log(product);
    console.log('Finished Creating user! products.js');
    return product;
  } catch (error) {
    console.error('Error Creating User! products.js');
    throw error;
  }
}

module.exports = {
  createProduct,
};
