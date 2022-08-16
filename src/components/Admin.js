import React, { useState } from "react";
import { Adminhome, Adminadd, Adminupdate, Adminsettings } from './'
import AdminAddIcon from "./Photo/AdminAddIcon.png";
import AdminHomeIcon from "./Photo/AdminHomeIcon.png"
import AdminUpdateIcon from "./Photo/AdminUpdateIcon.png"
import AdminSettingsIcon from "./Photo/AdminSettingsIcon.png"
import "../style/Admin.css";

const Admin = () => {
  const [adminHome, setAdminHome] = useState(true)
  const [adminAdd, setAdminAdd] = useState(true)
  const [adminUpdate, setAdminUpdate] = useState(true)
  const [adminSettings, setAdminSettings] = useState(true)

  function adminHomeHideFunc() {
    setAdminHome(false)
    setAdminSettings(true)
    setAdminAdd(true)
    setAdminUpdate(true)
  }

  function adminAddHideFunc() {
    setAdminAdd(false)
    setAdminHome(true)
    setAdminSettings(true)
    setAdminUpdate(true)
  }

  function adminUpdateHideFunc() {
    setAdminUpdate(false)
    setAdminHome(true)
    setAdminSettings(true)
    setAdminAdd(true)
  }

  function adminSettingsHideFunc() {
    setAdminSettings(false)
    setAdminHome(true)
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
      {!adminHome ? (
        <Adminhome />
      ) : null
      }
      {!adminAdd ? (
        <Adminadd />
      ) : null
      }
      {!adminUpdate ? (
        <Adminupdate />
      ) : null
      }
      {!adminSettings ? (
        <Adminsettings />
      ) : null
      }
    </div>

  );
};

export default Admin;