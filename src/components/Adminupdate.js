import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg"
import LongSleeve from "./Photo/LongSleeveImage.jpg"
import Hoodie from "./Photo/HoodieImage.jpg"
import Sweater from "./Photo/SweaterImage.jpg"
import "../style/Adminupdate.css";

const Adminupdate = ({
  shortSleeveProducts,
  setShortSleeveProducts,
  longSleeveProducts,
  setLongSleeveProducts,
  sweaterProducts,
  setSweaterProducts,
  hoodieProducts,
  setHoodieProducts,
}) => {
  
  const [shortSleeveProductFilteredData, setShortSleeveProductFilteredData] = useState([]);
  const [longSleeveProductFilteredData, setLongSleeveProductFilteredData] = useState([]);
  const [sweaterProductFilteredData, setSweaterProductFilteredData] = useState([]);
  const [hoodieProductFilteredData, setHoodieProductFilteredData] = useState([]);
  
  const [searchShortSleeveProducts, setSearchShortSleeveProducts] = useState("");
  const [searchLongSleeveProducts, setSearchLongSleeveProducts] = useState("");
  const [searchSweaterProducts, setSearchSweaterProducts] = useState("");
  const [searchHoodieProducts, setSearchHoodieProducts] = useState("");

  function searchShortSleeveItems(searchValue) {
    if (searchValue.length) {
      const data = shortSleeveProducts.filter((item) => {
        return item.creatorName
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          item.goal.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });

      data.length > 0
        ? setShortSleeveProductFilteredData(data)
        : setShortSleeveProductFilteredData([]);
    }
  }

  useEffect(() => {
    searchShortSleeveItems(searchShortSleeveProducts);
  }, [searchShortSleeveProducts]);

//   useEffect(() => {
//     getShortSleeveProducts(token)
//       .then((object) => {
//         setYourRoutines(object);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [yourRoutines]);

  return (
    <div className="AdminUpdateContainer">
      <div className="UpdateRoutesGrid">
      <NavLink to="/admin/Short_Sleeve">
                    <div className="UpdateRoutesContainer">
                    <img className="Image" src={ShortSleeve} />
                    <div className="HeaderCenter">Short Sleeve</div>
                    </div>
                </NavLink>
                <NavLink to="/admin/Long_Sleeve">
                    <div className="UpdateRoutesContainer">
                    <img className="Image" src={LongSleeve} />
                    <div className="HeaderCenter">Long Sleeve</div>
                    </div>
                </NavLink>
                <NavLink to="/admin/Hoodie">
                    <div className="UpdateRoutesContainer">
                    <img className="Image" src={Hoodie} />
                    <div className="HeaderCenter">Hoodie</div>
                    </div>
                </NavLink>
                <NavLink to="/admin/Sweater">
                    <div className="UpdateRoutesContainer">
                    <img className="Image" src={Sweater} />
                    <div className="HeaderCenter">Sweater</div>
                    </div>
                </NavLink>
      </div>
    </div>
  );
};

export default Adminupdate;
