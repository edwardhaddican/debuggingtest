const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', async (req, res, next) => {});

// ROUTER: /api/users
const usersRouter = require('./users');
router.use('/users', usersRouter);

// ROUTER: /api/products
const products = require('./products');
router.use('/products', productsRouter);

// ROUTER: /api/cart
const carts = require('./carts');
router.use('/cart', cartRouter);

// ROUTER: /api/cart_products
const cart_productsRouter = require('./cart_products');
router.use('/cart_products', cart_productsRouter);

// ROUTER: /api/orders
const orders = require('./orders');
router.use('/orders', ordersRouter);

router.use('*', (req, res, next) => {
  res.status(404);
  res.render('error', { error: 'Not Found' });
});

module.exports = router;

/*
















/*

const { server, handle } = require('../index');
const { client } = require('../db');
const supertest = require('supertest');
const request = supertest(server);

describe('/api/health endpoint', () => {
  // close db connection and supertest server tcp connection
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  it('should respond with { healthy: true }', async () => {
    const response = await request.get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.healthy).toBe(true);
  });
});

*/
