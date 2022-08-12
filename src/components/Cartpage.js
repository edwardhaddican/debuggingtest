import React from "react";
import ProfileIconAccPage from './Photo/ProfileIconAccPage.png'
import HoodieImage from './Photo/HoodieImage.jpg'
import ShortSleeve from './Photo/ShortSleeveImage.jpg'
import LongSleeve from './Photo/LongSleeveImage.jpg'
import { motion } from "framer-motion";
import "../style/Cartpage.css";

const Cartpage = () => {
    return (
        <motion.div className="CartContainer"
        initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
        >
            <div className="CartHeader">
            Cart
            </div>
            <div className="CartContainerLeft">
                <div>
                    First & Last Name
                </div>
                <img className="CartPic" src={ProfileIconAccPage}/>
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
          <div className="CartProductContainer">
            <div>
              <img className="CartImages" src={HoodieImage} />
            </div>
            <div className="CartInfo">
              <div className="CartText">Price: $$$</div>
              <div className="CartText">Size: N/A</div>
              <div className="CartText">Color: N/A</div>
            </div>
          </div>
          <div className="CartProductContainer">
            <div>
              <img className="CartImages" src={ShortSleeve} />
            </div>
            <div className="CartInfo">
              <div className="CartText">Price: $$$</div>
              <div className="CartText">Size: N/A</div>
              <div className="CartText">Color: N/A</div>
            </div>
          </div>
          <div className="CartProductContainer">
            <div>
              <img className="CartImages" src={LongSleeve} />
            </div>
            <div className="CartInfo">
              <div className="CartText">Price: $$$</div>
              <div className="CartText">Size: N/A</div>
              <div className="CartText">Color: N/A</div>
            </div>
          </div>
          </div>
            </div>
        </motion.div>
    )
}

export default Cartpage