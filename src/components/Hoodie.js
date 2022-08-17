import React, { useEffect, useState } from "react";
import HoodieImage from "./Photo/HoodieImage.jpg";
import { motion } from "framer-motion";
import "../style/Hoodie.css";
import { getAllProductsByCategory } from "../api";

const Hoodie = ({ allProducts, setAllProducts }) => {
    console.log(allProducts, "ALL PRODUCTS")
    // function searchHoodieProducts(searchValue) {
    //     if (searchValue.length) {
    //       const data = allProducts.filter((item) => {
    //         return item.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
    //           item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
    //           item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    //           item.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
    //           item.size.toLowerCase().includes(searchValue.toLowerCase())
    //           ? true
    //           : false;
    //       });
    
    //       data.length > 0
    //         ? setProductFilteredData(data)
    //         : setProductFilteredData([]);
    //     }
    //   }
    
    //   useEffect(() => {
    //     searchHoodieProducts(searchProducts);
    //   }, [searchProducts]);
    
      useEffect(() => {
        async function getHoodieProducts() {
          try {
            const result = await getAllProductsByCategory("Hoodie");
            console.log(result, "RESULT")
            const products = result.products;
            setAllProducts(products);
          } catch (error) {
            throw error;
          }
        }
        getHoodieProducts();
      }, []);

  return (
    <motion.div className="HoodieGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
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
                InStock:  N/A
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
                InStock:  N/A
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
                InStock:  N/A
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
                InStock:  N/A
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