import React, { useState, useEffect } from "react";
import { deleteProduct, getAllProducts } from "../api";
import UpdateProductForm from "./UpdateProductForm";

import "../style/Adminupdate.css";

const Adminupdate = ({ allProducts, setAllProducts }) => {
  console.log(allProducts, "IS THIS BROKEN?")
  const [productFilteredData, setProductFilteredData] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [showUpdateAllProductsForm, setShowUpdateAllProductsForm] =
    useState(null);
  const [showUpdateFilteredProductsForm, setShowUpdateFilteredProductsForm] =
    useState(null);

  function searchYourProducts(searchValue) {
    if (searchValue.length) {
      const data = allProducts.filter((item) => {
        return item.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.size.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });

      data.length > 0
        ? setProductFilteredData(data)
        : setProductFilteredData([]);
    }
  }

  useEffect(() => {
    searchYourProducts(searchProducts);
  }, [searchProducts]);

  useEffect(() => {
    async function getTheProducts() {
      try {
        const result = await getAllProducts();
        const products = result.products;
        console.log(products, "HERE BE THE PRODUCTS")
        setAllProducts(products);
      } catch (error) {
        throw error;
      }
    }
    getTheProducts();
  }, []);

  //   async function handleDelete (event) {
  //     event.preventDefault();
  //     try {
  //         console.log(element.id)
  //         await deleteProduct(element.id)
  //     } catch (error) {
  //         throw error
  //     }
  //   }

  return (
    <div className="AdminUpdateContainer">
      <input
        id="searchYourProductsInput"
        name="search-products"
        type="text"
        value={searchProducts}
        placeholder="Search Your Products..."
        onChange={(event) => {
          setSearchProducts(event.target.value);
        }}
      />
      <div>
        {productFilteredData.length > 0
          ? productFilteredData.map((element, idx) => {
              return (
                <div className="UpdateMapContainer" key={`Filtered ${idx}`}>
                  <div>
                    <div>
                      <b>Gender: </b>
                      {element.gender}
                    </div>
                    <div>
                      <b>Category: </b>
                      {element.category}
                    </div>
                    <div>
                      <b>Product_Name: </b> {element.product_name}
                    </div>
                    <div>
                      <b>Description: </b> {element.description}
                    </div>
                    <div>
                      <b>Size: </b> {element.size}
                    </div>
                    <div>
                      <b>Price: </b> {element.price}
                    </div>
                    {element.availability ? (
                      <div>
                        <b>Availability:</b> True{" "}
                      </div>
                    ) : (
                      <div>
                        <b>Availability:</b> False{" "}
                      </div>
                    )}
                    <div>
                      <b>Quantity_InStock: </b>
                      {element.quantity_instock}
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div>
                    {showUpdateFilteredProductsForm != element.id ? (
                      <>
                        <button
                          onClick={() => {
                            setShowUpdateFilteredProductsForm(element.id);
                          }}
                        >
                          Update
                        </button>
                      </>
                    ) : (
                      <>
                        <UpdateProductForm element={element} />
                        <button
                          onClick={() => {
                            setShowUpdateFilteredProductsForm(null);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                  <br></br>
                  <br></br>
                  <form
                    onSubmit={async (event) => {
                      event.preventDefault();
                      await deleteProduct(element.id);
                    }}
                  >
                    <button type="submit">Delete Product</button>
                  </form>
                  <br></br>
                  <br></br>
                </div>
              );
            })
          : allProducts.map((element, idx) => {
              return (
                <div className="UpdateMapContainer" key={`Products ${idx}`}>
                  <div>
                    <div>
                      <b>Gender: </b>
                      {element.gender}
                    </div>
                    <div>
                      <b>Category: </b>
                      {element.category}
                    </div>
                    <div>
                      <b>Product_Name: </b> {element.product_name}
                    </div>
                    <div>
                      <b>Description: </b> {element.description}
                    </div>
                    <div>
                      <b>Size: </b> {element.size}
                    </div>
                    <div>
                      <b>Price: </b> {element.price}
                    </div>

                    {element.availability ? (
                      <div>
                        <b>Availability:</b> True{" "}
                      </div>
                    ) : (
                      <div>
                        <b>Availability:</b> False{" "}
                      </div>
                    )}

                    <div>
                      <b>Quantity_InStock: </b>
                      {element.quantity_instock}
                    </div>
                  </div>
                  <div>
                    {showUpdateAllProductsForm != element.id ? (
                      <>
                        <button
                          onClick={() => {
                            setShowUpdateAllProductsForm(element.id);
                          }}
                        >
                          Update
                        </button>
                      </>
                    ) : (
                      <>
                        <UpdateProductForm element={element} />
                        <button
                          onClick={() => {
                            setShowUpdateAllProductsForm(null);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                  <br></br>
                  <br></br>
                  <form
                    onSubmit={async (event) => {
                      event.preventDefault();
                      await deleteProduct(element.id);
                    }}
                  >
                    <button type="submit">Delete Product</button>
                  </form>
                  <br></br>
                  <br></br>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Adminupdate;
