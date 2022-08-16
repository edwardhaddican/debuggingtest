const client = require('./client');

async function createProduct({
  gender,
  category,
  product_name,
  description,
  size,
  price,
  availability,
  quantity_instock,
}) {
  console.log('Starting to create Product! db/products.js');
  try {
    const { rows } = await client.query(
      `
        INSERT INTO products(
            gender,
            category,
            product_name,
            description,
            size,
            price,
            availability,
            quantity_instock) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
        RETURNING *;
      `,
      [
        gender,
        category,
        product_name,
        description,
        size,
        price,
        availability,
        quantity_instock,
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
    console.error('Error Getting Product By Id! products.js');
    throw error;
  }
}

async function getProductByCategory(category) {
  console.log("Starting to get product by category... products.js");
  try {
    const {
      rows: [product],
    } = await client.query(`
    SELECT *   
    FROM products
    WHERE category=${category};
    `);
    console.log("Finished Getting Product By Category! products.js");
    return product;
  } catch (error) {
    console.error("Error Getting Product By Category! products.js");
    throw error;
  }
}

async function updateProduct(product_id, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(', ');
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        UPDATE products
        SET ${setString}
        WHERE id=${product_id}
        RETURNING *;
      `,
      Object.values(fields)
    );
    console.log('Finished Updating Product! products.js');
    return product;
  } catch (error) {
    onsole.error('Error Updating Product! products.js');
    throw error;
  }
}

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
  getProductByCategory,
  updateProduct,
};
