import React, { useEffect, useState } from "react";
import HoodieImage from "./Photo/HoodieImage.jpg";
import { motion } from "framer-motion";
import "../style/Hoodie.css";
import { getAllProductsByCategory } from "../api";

const Hoodie = ({ allProducts, setAllProducts }) => {
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
        const products = result.products;
        setAllProducts(products);
      } catch (error) {
        throw error;
      }
    }
    getHoodieProducts();
  }, []);

  return (
    <motion.div
      className="HoodieGrid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {allProducts.map((element, idx) => {
        return (
          <div className="HoodieContainer" key={`Hoodie ${idx}`}>
            <div>{element.product_name}</div>
            <img className="HoodieImage" src={HoodieImage} />
            <div className="HoodieInfoContainer">
              <div>
                <div>Gender: {element.gender}</div>
                <div>Category: {element.category}</div>
                <div>Size: {element.size}</div>
                <div>Price: {element.price}</div>
                <div>In Stock? {element.quantity_instock}</div>
                <p className="HoodieAbout">
                  Description: {element.description}
                </p>
                    <button className="HoodieButton">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Hoodie;
