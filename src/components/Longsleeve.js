import React, { useEffect } from "react";
import LongSleeve from "./Photo/LongSleeveImage.jpg";
import { motion } from "framer-motion";
import { getAllProductsByCategory } from "../api";
import "../style/Longsleeve.css";

const Longsleeve = ({allProducts, setAllProducts}) => {
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
    async function getLongSleeveProducts() {
      try {
        const result = await getAllProductsByCategory("Long_Sleeve");
        console.log(result, "RESULT");
        const products = result.products;
        setAllProducts(products);
      } catch (error) {
        throw error;
      }
    }
    getLongSleeveProducts();
  }, []);

  return (
    <motion.div className="LongSleeveGrid"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
    >

        {
            allProducts.map((element, idx) => {
                return(
                    <div className="LongSleeveContainer">
        <div>{element.product_name}</div>
        <img className="LongSleeveImage" src={LongSleeve} />
        <div className="LongSleeveInfoContainer">
                    <div>Gender: {element.gender}</div>
                    <div>Category: {element.category}</div>
                    <div>Size: {element.size}</div>
                    <div>Price: {element.price}</div>
                    <div>InStock?: {element.quantity_instock}</div>
                    <div>Description: {element.description}</div>
                    <form>
                    <button type="Submit" className="LongSleeveButton">Add to Cart</button>
                    </form>
        </div>
      </div>
                )
            })
        }
    </motion.div>
  );
};

export default Longsleeve;
