import React, { useState } from 'react'
import "./Header.css";
import roshanlogo from '../../assets/RoshanLogo.png'
import cart_icon from '../../assets/cart_icon.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [menu, setMenu] = useState('All Categories');
  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={roshanlogo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu" >
        <li onClick={() => {setMenu('All Categories')}}> <NavLink to="/">Home</NavLink> {menu==='All Categories'?<hr/>:''}</li>
        <li onClick={() => {setMenu('Men')}}> <NavLink to="/mens">Men</NavLink> {menu==='Men'?<hr/>:''}</li>
        <li onClick={() => {setMenu('Women')}}><NavLink to="/womens">Women</NavLink> {menu==='Women'?<hr/>:''}</li>
        <li onClick={() => {setMenu('Kids')}}><NavLink to="/kids">Kids</NavLink> {menu==='Kids'?<hr/>:''}</li>
      </ul>
      <div className="nav-login-cart">
      <NavLink to="/login"><button>Login</button></NavLink> 
      <NavLink to="/cart"><img src={cart_icon} alt="login" /></NavLink> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Header;















//this is my first navBar--------------------

// import React, { useState } from "react";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// // import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
// import DrawerComp from "./DrawerComp";
// import roshan from '../assets/RoshanLogo.png'
// import { NavLink } from "react-router-dom";
// import "./Header.css";






// const Header = () => {
  
//   const [value, setValue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar>
//         {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
//           <img src={roshan} alt="rosh" width={70} height={50} ></img>
//           {isMatch ? (
//             <>
//               <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
//                 RoshMart
//               </Typography>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//               >
//                  <NavLink className='nav'  to="/">
//                  Home
//                 </NavLink>

//                 <NavLink className='nav'  to="/product/:productId">
//                  Products Details
//                 </NavLink>

//                 <NavLink className='nav'  to="/">
//                 About Us
//                 </NavLink>

//                 <NavLink className='nav'  to="/">
//                 Contact
//                 </NavLink> 
//                 {/* <Tab label="Products" />
//                 <Tab label="Services" />
//                 <Tab label="About Us" />
//                 <Tab label="Contact" /> */}
//               </Tabs>
              
//               <Button sx={{ marginLeft: "auto" }} variant="contained">
//                 Login
//               </Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//                 SignUp
//               </Button>
              
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
      
//     </React.Fragment>
//   );
// };

// export default Header;


