import React, { useState } from "react";
import { Adminhome, Adminadd, Adminupdate, Adminsettings } from './'
import AdminAddIcon from "./Photo/AdminAddIcon.png";
import AdminHomeIcon from "./Photo/AdminHomeIcon.png"
import AdminUpdateIcon from "./Photo/AdminUpdateIcon.png"
import AdminSettingsIcon from "./Photo/AdminSettingsIcon.png"
import "../style/Admin.css";

const Admin = () => {
  const [adminHome, setAdminHome] = useState(false)
  const [adminAdd, setAdminAdd] = useState(false)
  const [adminUpdate, setAdminUpdate] = useState(false)
  const [adminSettings, setAdminSettings] = useState(false)

  // function adminHomeShowFunc() {
  //   setAdminHome(true)
  // }

  function adminHomeHideFunc() {
    setAdminHome(false)
    setAdminSettings(true)
    setAdminAdd(true)
    setAdminUpdate(true)
  }

  // function adminAddShowFunc() {
  //   setAdminAdd(true)
  // }

  function adminAddHideFunc() {
    setAdminHome(true)
    setAdminSettings(true)
    setAdminAdd(false)
    setAdminUpdate(true)
  }

  // function adminUpdateShowFunc() {
  //   setAdminUpdate(true)
  // }

  function adminUpdateHideFunc() {
    setAdminHome(true)
    setAdminSettings(true)
    setAdminAdd(true)
    setAdminUpdate(false)
  }

  // function adminSettingsShowFunc() {
  //   setAdminSettings(true)
  // }

  function adminSettingsHideFunc() {
    setAdminHome(true)
    setAdminSettings(false)
    setAdminAdd(true)
    setAdminUpdate(true)
  }

  return ( 
    <div className="adminPage">
        <img
        src={AdminHomeIcon}
        id="AdminHomeIcon"
        onClick={adminHomeHideFunc}
        />
         <img
        src={AdminAddIcon}
        id="AdminAddIcon"
        onClick={adminAddHideFunc}
        />
         <img
        src={AdminUpdateIcon}
        id="AdminUpdateIcon"
        onClick={adminUpdateHideFunc}
        />
        <img
        src={AdminSettingsIcon}
        id="AdminSettingsIcon"
        onClick={adminSettingsHideFunc}
        />
      {adminHome ? (
        <Adminhome />
      ) : null
      }
      {adminAdd ? (
        <Adminadd />
      ) : null
      }
      {adminUpdate ? (
        <Adminupdate />
      ) : null
      }
      {adminSettings ? (
        <Adminsettings />
      ) : null
      }
    </div>

  );
};

export default Admin;

{/* <div className="adminUpdateContainer">
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
      </div> */}