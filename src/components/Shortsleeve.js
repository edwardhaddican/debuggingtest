import React from "react";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg";
import { motion } from "framer-motion";
import "../style/Shortsleeve.css";

const Shortsleeve = () => {
  return (
    <motion.div className="ShortSleeveGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
    >
      <div className="ShortSleeveContainer">
        <div>Name of Product</div>
        <img className="ShortSleeveImage" src={ShortSleeve} />
        <div className="ShortSleeveInfoContainer">
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
                InStock:  N/A
            </div>
            <div>
                About:
            </div>
            <p className="ShortSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="ShortSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="ShortSleeveContainer">
        <div>Name of Product</div>
        <img className="ShortSleeveImage" src={ShortSleeve} />
        <div className="ShortSleeveInfoContainer">
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
                InStock:  N/A
            </div>
            <div>
                About:
            </div>
            <p className="ShortSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="ShortSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="ShortSleeveContainer">
        <div>Name of Product</div>
        <img className="ShortSleeveImage" src={ShortSleeve} />
        <div className="ShortSleeveInfoContainer">
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
                InStock:  N/A
            </div>
            <div>
                About:
            </div>
            <p className="ShortSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="ShortSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="ShortSleeveContainer">
        <div>Name of Product</div>
        <img className="ShortSleeveImage" src={ShortSleeve} />
        <div className="ShortSleeveInfoContainer">
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
                InStock:  N/A
            </div>
            <div>
                About:
            </div>
            <p className="ShortSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="ShortSleeveButton">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shortsleeve;
