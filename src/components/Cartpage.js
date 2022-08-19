import React, { useEffect, useState } from "react";
import ProfileIconAccPage from "./Photo/ProfileIconAccPage.png";
import HoodieImage from "./Photo/HoodieImage.jpg";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg";
import LongSleeve from "./Photo/LongSleeveImage.jpg";
import { motion } from "framer-motion";
import "../style/Cartpage.css";
import {
  getAllCartProductsByCartId,
  updateCartProducts,
  deleteCartProducts,
} from "../api";

const Cartpage = ({ allCartProducts, setAllCartProducts }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(null);
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    try {
      async function getCartProductsByCartId() {
        const cartId = localStorage.getItem("cartId");
        const cartProducts = await getAllCartProductsByCartId(cartId);
        setAllCartProducts(cartProducts.cart_productsbyid);
      }

      getCartProductsByCartId();
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <motion.div
      className="CartContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="CartHeader">Cart</div>
      <div className="CartContainerLeft">
        <div>First & Last Name</div>
        <img className="CartPic" src={ProfileIconAccPage} />
      </div>
      <div className="CartContainerRight">
        <div className="CartOrderDetails">
          <div className="CartOrderDetailsHeader">Order Details</div>
          <div className="CartOrderDetailsInfo">Price: $$$</div>
          <div className="CartOrderDetailsInfo">Order Quantity: N/A</div>
          <div className="CartOrderDetailsInfo">Expected Delivery: N/A</div>
          <button className="CartPageButton">CheckOut</button>
        </div>
        <div className="CartOrderContainer">
          {allCartProducts.map((element, idx) => {
            return (
              <div key={`CartProducts ${idx}`}>
                <div className="CartProductContainer">
                  <div>
                    <img className="CartImages" src={HoodieImage} />
                  </div>
                  <div className="CartInfo">
                    {/* <div className="CartText">Price: {element.price}</div>
                    <div className="CartText">
                      Product ID: {element.product_id}
                    </div> */}
                    <div className="CartText">
                      Order Quantity: {element.quantity}
                    </div>
                    <div>
                      {showUpdateForm != element.id ? (
                        <form
                          onSubmit={async (event) => {
                            event.preventDefault();
                            setShowUpdateForm(element.id);
                          }}
                        >
                          <button type="Submit">Update</button>
                        </form>
                      ) : (
                        <>
                          <form
                            onSubmit={async (event) => {
                              event.preventDefault();
                              setShowUpdateForm(null);
                              await updateCartProducts(element.id, quantity);
                            }}
                          >
                            <label>
                              Qty:{" "}
                              <select
                                className="UpdateCartProductsSelect"
                                name="size"
                                id="select-size"
                                value={quantity}
                                onChange={(event) => {
                                  setQuantity(event.target.value);
                                }}
                              >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                            </label>
                            <button type="submit">Update Product</button>
                          </form>
                          <form
                            onSubmit={() => {
                              setShowUpdateForm(null);
                            }}
                          >
                            <button type="submit">Cancel</button>
                          </form>
                        </>
                      )}
                    </div>
                    <form
                      onSubmit={async (event) => {
                        event.preventDefault();
                        await deleteCartProducts(element.id);
                      }}
                    >
                      <button type="submit">Remove</button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Cartpage;
