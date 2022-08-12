const client = require('./client');

async function createProduct_Size({ product_size, product_id }) {
  console.log('Starting to create product_sizes! db/product_sizes.js');
  try {
    const {
      rows: [product_size],
    } = await client.query(
      `
        INSERT INTO product_sizes(product_size, product_id)
        VALUE($1, $2)
        RETURNING *;
      `,
      [product_size, product_id]
    );

    console.log('Project_Size created: ..');
    console.log(product_size);
    console.log('Finished Creating Product_Size! product_sizes.js');
    return product_size;
  } catch (error) {
    console.error('Error Creating Product_Size! product_sizes.js');
    throw error;
  }
}

module.exports = {
  createProduct_Size,
};
