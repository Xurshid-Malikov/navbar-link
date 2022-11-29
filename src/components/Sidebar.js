import { NavLink } from "react-router-dom";
import dashboardImg from "../Assets/Images/dashboard.svg"
import darsJadvali from "../Assets/Images/dars_jadvali.svg"
import dashboardLogo from "../Assets/Images/dashboard_logo.svg"
import  guruhlarImg  from "../Assets/Images/guruhlar.svg"
import oquvchilarImg from "../Assets/Images/o'quvchilar.svg"
import sozlamalarImg from "../Assets/Images/sozlamalar.svg"
import  yordamImg  from "../Assets/Images/yordam.svg"
import { useState } from "react";

export const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/dashboar",
      name:"Dashboard",
      photo: dashboardImg
    },
    {
      path:"/guruhlar",
      name:"Guruhlar",
      photo: guruhlarImg
    },
    {
      path:"/oquvchilar",
      name:"O'qubchilar",
      photo: oquvchilarImg
    },
    {
      path:"/bugalteriya",
      name:"Dars jadvali",
      photo: darsJadvali
    },
    {
      path:"/sozlamalar",
      name:"Sozlamalar",
      photo:sozlamalarImg
    },
    {
      path:"/yordam",
      name:"Yordam",
      photo:yordamImg
    },
  ]
  return (
    <div className="containerr">
      <div style={{width: isOpen ? "300px" : "102px"}} className="sidebar">
        <div className="top_section"> 
          <div className="bars">
            <img style={{marginLeft: isOpen ? "0px" : "5px"}} src={dashboardLogo} onClick={toggle}/>
            <h2 style={{display: isOpen ? "block" : "none"}} onClick={toggle} className="logo">Dashboard</h2>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon"><img src={item.photo} /></div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
}

