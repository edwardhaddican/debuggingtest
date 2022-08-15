const client = require('./client');

async function createProduct({
  gender,
  product_name,
  description,
  size,
  price,
  availability,
  quantity_instock,
  admin_active,
}) {
  console.log('Starting to create Product! db/products.js');
  try {
    const { rows } = await client.query(
      `
        INSERT INTO products(
            gender,
            product_name,
            description,
            size,
            price,
            availability,
            quantity_instock,
            admin_active) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
        RETURNING *;
      `,
      [
        gender,
        product_name,
        description,
        size,
        price,
        availability,
        quantity_instock,
        admin_active,
      ]
    );

    console.log('Finished Creating Product! products.js');
    return rows[0];
  } catch (error) {
    console.error('Error Creating Product! products.js');
    throw error;
  }
}

async function getAllProducts() {
  try {
    const {
      rows: [],
    } = await client.query(`
        SELECT *
        FROM products
        `);
    console.log('Finished Getting Product! products.js');
    return product;
  } catch (error) {
    console.error('Error Getting Product! products.js');
    throw error;
  }
}

async function getProductById(product_id) {
  console.log('Starting to get product by id... products.js');
  try {
    const {
      rows: [product],
    } = await client.query(`
    SELECT *   
    FROM products
    WHERE id=${product_id};
    `);
    console.log('Finished Getting Product By Id! products.js');
    return product;
  } catch (error) {
    console.error('Error Getting Producty By Id! products.js');
    throw error;
  }
}

/*
async function updateProduct() {
  try {
    const {
      rows: [],
    } = await client.query(`
        SELECT *
        FROM
        WHERE
        `);
    return;
  } catch (error) {
    console.error('Error');
    throw error;
  }
}
*/

async function deleteProduct() {
  try {
    const {
      rows: [product],
    } = await client.query(`
        DELETE FROM products
        WHERE id=${user_Id};
        RETURNING *
        `);
    return product;
  } catch (error) {
    console.error('Error Deleting Product! db/products.js');
    throw error;
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
};
