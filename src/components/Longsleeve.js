import React from "react";
import LongSleeve from "./Photo/LongSleeveImage.jpg";
import { motion } from "framer-motion";
import "../style/Longsleeve.css";

const Longsleeve = () => {
  return (
    <motion.div className="LongSleeveGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.3}}
    >
      <div className="LongSleeveContainer">
        <div>Name of Product</div>
        <img className="LongSleeveImage" src={LongSleeve} />
        <div className="LongSleeveInfoContainer">
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
            <p className="LongSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="LongSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="LongSleeveContainer">
        <div>Name of Product</div>
        <img className="LongSleeveImage" src={LongSleeve} />
        <div className="LongSleeveInfoContainer">
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
            <p className="LongSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="LongSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="LongSleeveContainer">
        <div>Name of Product</div>
        <img className="LongSleeveImage" src={LongSleeve} />
        <div className="LongSleeveInfoContainer">
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
            <p className="LongSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="LongSleeveButton">Add to Cart</button>
        </div>
      </div>
      <div className="LongSleeveContainer">
        <div>Name of Product</div>
        <img className="LongSleeveImage" src={LongSleeve} />
        <div className="LongSleeveInfoContainer">
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
            <p className="LongSleeveAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="LongSleeveButton">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Longsleeve;
