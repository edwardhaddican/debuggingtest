import React from "react";
import Hoodie from "./Photo/HoodieImage.jpg";
import "../style/Hoodie.css";

const Hoodie = () => {
  return (
    <div className="HoodieGrid">
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={Hoodie} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">CheckOut</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={Hoodie} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">CheckOut</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={Hoodie} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">CheckOut</button>
        </div>
      </div>
      <div className="HoodieContainer">
        <div>Name of Product</div>
        <img className="HoodieImage" src={Hoodie} />
        <div className="HoodieInfoContainer">
            <div>
                Color: N/A
            </div>
            <div>
                size: N/A
            </div>
            <div>
                Price: N/A
            </div>
            <div>
                About:
            </div>
            <p className="HoodieAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="HoodieButton">CheckOut</button>
        </div>
      </div>
    </div>
  );
};

export default Hoodie;