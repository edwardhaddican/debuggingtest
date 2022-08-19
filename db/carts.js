const client = require('./client');

async function createCart({ user_id, order_id, purchased }) {
  console.log('Starting to create Cart.. db/carts.js');
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
          INSERT INTO carts
          (user_id, order_id, purchased) 
          VALUES($1, $2, $3)
          RETURNING *;
        `,
      [user_id, order_id, purchased]
    );
    console.log('Cart created..');
    console.log(cart);
    console.log('Finished Creating Cart! carts.js');
    return cart;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllCartsByOrderId(orderId) {
  try {
    const { rows: cartsbyid } = await client.query(`
        SELECT *
        FROM carts
        WHERE order_id=${orderId};
        `);
    console.log('Finished Getting Cart id By Order id! db/carts.js');
    return cartsbyid;
  } catch (error) {
    console.error('Error Getting Cart id by Order id! db/carts.js');
    throw error;
  }
}

async function getCurrentCart({ cart_id }) {
  try {
    const { rows: cart } = await client.query(
      `
            SELECT * FROM carts
            WHERE id = $1
            AND purchased = false;
            `,
      [cart_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Getting Current Cart! db/carts.js');
    throw error;
  }
}

async function updateCartPurchaseStatus({ user_id }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
        UPDATE carts
        SET purchased = true
        WHERE carts.user_id= $1
        RETURNING *;
      `,
      [user_id]
    );
    return cart;
  } catch (error) {
    console.error('Error Updating Cart Purchase Status! db/carts.js');
    throw error;
  }
}

// **
async function deleteCurrentCart({ user_id, order_id }) {
  try {
    await client.query(
      `
    DELETE FROM carts.*
    WHERE carts.user_id = $1
    AND carts.order_id = $2
    AND purchased = false;
    `[(user_id, order_id)]
    );
    await client.query(
      `
    DELETE FROM cart_products.*
    WHERE cart_products.cart_id = $1
    `
    );
  } catch (error) {
    console.error('Error Deleting Current Cart!');
    throw error;
  }
}

async function attachCartToOrders(orders) {
  const ordersToReturn = [...orders];
  const binds = orders.map((_, index) => `$${index + 1}`).join(', ');
  const order_ids = orders.map((order) => order.id);
  if (!order_ids?.length) return [];

  try {
    const { rows: carts } = await client.query(
      `
        SELECT carts.*
        FROM carts 
        ON orders.cart_id = orders.id
        WHERE 
          carts.order_id 
        IN 
          (${binds});

      `,
      order_ids
    );

    for (const order of ordersToReturn) {
      const cartsToAdd = carts.filter((cart) => cart.order_id === order.id);
      order.carts = cartsToAdd;
    }
    return ordersToReturn;
  } catch (error) {
    console.error('Error Attaching Cart To Order!!!');
    throw error;
  }
}

module.exports = {
  createCart,
  getAllCartsByOrderId,
  getCurrentCart,
  updateCartPurchaseStatus,
  deleteCurrentCart,
  attachCartToOrders,
};
