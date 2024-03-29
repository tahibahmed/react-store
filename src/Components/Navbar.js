import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import lgooo from "../assets/lgoo .png";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TemporaryDrawer from "./Drawer";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/material";
import CartContext from "../Context/Context";
import { auth, signOut } from "../database/Firebase";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [opendraw, setOpendraw] = useState(false);
  const navigate =  useNavigate()
  const { cart, setcart } = useContext(CartContext);
const signoutt =()=>{
  signOut(auth).then(() => {
    navigate('/login')
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
 
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" href="#">
            React Store <img src={lgooo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-50 ms-5 mx-4  ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav w-50 ms-5 mx-4 ">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={cart.length} color="error">
                    <AddShoppingCartIcon onClick={() => setOpendraw(true)} />
                  </Badge>
                  <TemporaryDrawer
                    opendraw={opendraw}
                    setOpendraw={setOpendraw}
                  />
                </IconButton>
                <IconButton aria-label="add to shopping cart">
                  <TemporaryDrawer
                    opendraw={opendraw}
                    setOpendraw={setOpendraw}
                  />
                </IconButton>
              </Box>
              <Button
                className="btn-log"
                onClick={() =>signoutt()}
                type="primary"
                htmlType="submit"
              >
                Logout
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
