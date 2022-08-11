import React from "react";
import Sweater from "./Photo/SweaterImage.jpg";
import "../style/Sweater.css";

const Sweater = () => {
  return (
    <div className="SweaterGrid">
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={Sweater} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">CheckOut</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={Sweater} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">CheckOut</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={Sweater} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">CheckOut</button>
        </div>
      </div>
      <div className="SweaterContainer">
        <div>Name of Product</div>
        <img className="SweaterImage" src={Sweater} />
        <div className="SweaterInfoContainer">
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
            <p className="SweaterAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="SweaterButton">CheckOut</button>
        </div>
      </div>
    </div>
  );
};

export default Sweater;