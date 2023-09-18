import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import lgooo from "../assets/lgoo .png";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TemporaryDrawer from './Drawer'

const Navbar = (props) => {

  const [open ,setOpen]=useState(false)
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
            <ul className="navbar-nav w-50 ms-5 ">
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
            <ul className="navbar-nav ms-auto ">
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
              <IconButton onClick={()=> setOpen(true)}  className="hell" aria-label="add to shopping cart">
                <AddShoppingCartIcon  />
                <TemporaryDrawer  open={open} setOpen={setOpen}/>
              </IconButton>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
