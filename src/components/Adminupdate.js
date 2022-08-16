import React, { useState, useEffect } from "react";
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

//   useEffect(() => {
//     searchYourItems(searchShortSleeveProducts);
//   }, [searchShortSleeveProducts]);

//   useEffect(() => {
//     userRoutines(token)
//       .then((object) => {
//         setYourRoutines(object);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [yourRoutines]);

  return (
    <div className="AdminUpdateContainer">
      <div className="updateShortSleeve">
        <div>Short Sleeve</div>
      </div>
      <div className="updateLongSleeve">
        <div>Long Sleeve</div>
      </div>
      <div className="updateSweaters">
        <div>Sweaters</div>
      </div>
      <div className="updateHoodies">
        <div>Hoodies</div>
      </div>
    </div>
  );
};

export default Adminupdate;
