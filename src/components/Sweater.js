import React from "react";
import SweaterImage from "./Photo/SweaterImage.jpg";
import { motion } from "framer-motion";
import "../style/Sweater.css";

const Sweater = () => {
  return (
    <motion.div className="SweaterGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
    >
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={SweaterImage} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">Add to Cart</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={SweaterImage} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">Add to Cart</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={SweaterImage} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">Add to Cart</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={SweaterImage} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sweater;