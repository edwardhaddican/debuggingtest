const express = require("express");
const { getAllCartProducts, assignProductToCartProducts } = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cart_products = await getAllCartProducts();

    res.send({
      cart_products,
    });
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res, next) => {
    const {
      user_id,
      cart_id,
      product_id,
      quantity,
      price
    } = req.body;
    
    
    try {
      const newCartProduct = await assignProductToCartProducts({
        user_id,
        cart_id,
        product_id,
        quantity,
        price,
      });
      console.log(newCartProduct, "NEW CART PRODUCT ABOVE")
      res.send({ message: "New Cart_Product Created!", newCartProduct: newCartProduct });
    } catch (error) {
      next({ message: "CART_PRODUCT ERROR" });
    }
  });

module.exports = router;
