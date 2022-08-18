const express = require("express");
const { getAllCartProducts, assignProductToCartProducts, getAllCartProductsById } = require("../db");
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

router.get("/:cartId", async (req, res) => {
  try {
    const { cartId } = req.params
    const cart_productsbyid = await getAllCartProductsById(cartId);
    res.send({
      cart_productsbyid,
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
