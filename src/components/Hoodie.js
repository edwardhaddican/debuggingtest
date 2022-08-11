import React from "react";
import HoodieImage from "./Photo/HoodieImage.jpg";
import { motion } from "framer-motion";
import "../style/Hoodie.css";

const Hoodie = () => {
  return (
    <motion.div className="HoodieGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 1}}
    >
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={HoodieImage} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                Size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">Add to Cart</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={HoodieImage} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                Size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">Add to Cart</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={HoodieImage} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                Size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">Add to Cart</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={HoodieImage} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                Size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hoodie;