import React, { useEffect, useState } from "react";
import SweaterImage from "./Photo/SweaterImage.jpg";
import { motion } from "framer-motion";
import "../style/Sweater.css";
import { getAllProductsByCategory } from "../api";

const Sweater = ({ allProducts, setAllProducts }) => {
  // function searchSweaterProducts(searchValue) {
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
  //     searchSweaterProducts(searchProducts);
  //   }, [searchProducts]);

    useEffect(() => {
        async function getSweaterProducts() {
          try {
            const result = await getAllProductsByCategory("Sweater");
            const products = result.products;
            setAllProducts(products);
          } catch (error) {
            throw error;
          }
        }
        getSweaterProducts();
      }, []);

  return (
    <motion.div
      className="SweaterGrid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {allProducts.map((element, idx) => {
        return (
          <div className="SweaterContainer" key={`Sweater ${idx}`}>
            <div><b>{element.product_name}</b></div>
            <img className="SweaterImage" src={SweaterImage} />
            <div className="SweaterInfoContainer">
              <div>
                <div><b>Gender: </b>{element.gender}</div>
                <div><b>Category: </b>{element.category}</div>
                <div><b>Size: </b>{element.size}</div>
                <div><b>Price: </b>{element.price}</div>
                <div><b>In Stock? </b>{element.quantity_instock}</div>
                <p className="SweaterAbout">
                  <b>Description: </b>{element.description}
                </p>
                    <button className="SweaterButton">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Sweater;