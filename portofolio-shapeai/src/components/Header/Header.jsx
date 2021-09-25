import React,{ useState } from 'react';
import "./Header.css";
// import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "../SidebarData/SidebarData";
import { IconContext } from 'react-icons';


function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return ( 
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
      <div className="navbar__center"><h1>Portofilio</h1></div>
      <Link to="#" className="menu__bars">
          <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSidebar}>
      <li className="navbar-toggle">
      <Link to="#" className="menu-bars">
        <AiIcons.AiOutlineClose />
      </Link>
      </li>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.to} >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default Header;
