const express = require("express");
const { createCart, getCurrentCart } = require("../db");
const router = express.Router();

router.get("/:userId", async (req, res) => {
    try {
      const { userId } = req.params
      const carts = await getCurrentCart(userId)
  
      res.send({
        carts,
      });
    } catch (error) {
      throw error;
    }
  });

router.post("/", async (req, res, next) => {
  const { user_id, purchased } = req.body;
  try {
    const newCart = await createCart({
        user_id, purchased
    });
    res.send({ message: "New Cart Created!", newCart: newCart });
  } catch (error) {
    next({ message: "CARTS ERROR" });
  }
});

module.exports = router;
