import React from "react";
import { NavLink } from "react-router-dom";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg"
import LongSleeve from "./Photo/LongSleeveImage.jpg"
import Hoodie from "./Photo/HoodieImage.jpg"
import Sweater from "./Photo/SweaterImage.jpg"
import "../style/Adminupdate.css";

const Adminupdate = () => {
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
