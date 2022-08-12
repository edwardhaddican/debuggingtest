const client = require('./client');

async function createProduct({
  gender,
  product_name,
  description,
  size,
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
            gender,
            product_name,
            description,
            size,
            price,
            availability,
            quantity_instock) 
        VALUES($1, $2, $3, $4, $5, $6, $7) 
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
      ]
    );

    console.log('User created: ..');
    console.log(product);
    console.log('Finished Creating Product! products.js');
    return product;
  } catch (error) {
    console.error('Error Creating Product! products.js');
    throw error;
  }
}

async function getProduct() {
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
        return ;
    } catch (error) {
        console.error("Error")
        throw error;
    }
}
async function deleteProduct() {
    try {
        const {
            rows: [],
        } = await client.query(`
        SELECT *
        FROM
        WHERE
        `);
        return ;
    } catch (error) {
        console.error("Error")
        throw error;
    }
}
async function () {
    try {
        const {
            rows: [],
        } = await client.query(`
        SELECT *
        FROM
        WHERE
        `);
        return ;
    } catch (error) {
        console.error("Error")
        throw error;
    }
}
*/

module.exports = {
  createProduct,
  getProduct,
};
