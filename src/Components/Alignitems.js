import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
// import { Button } from "antd";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import CartContext from "../Context/Context";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
function AlignItemsList() {
  const { cart, setCart } = useContext(CartContext);

  const delbutton = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex((v) => v.id === id);
    cartData.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  };
  const updateQty = (type, id) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex((v) => v.id === id);
    if (type === "+") {
      cartData.splice(index, 1, {
        ...cartData[index],
        qty: cartData[index].qty + 1,
      });
    } else {
      cartData.splice(index, 1, {
        ...cartData[index],
        qty: cartData[index].qty - 1,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {cart &&
        cart.map((v, i) => {
          return (
            <div key={i}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <img className="image-drawer" src={v.image} alt="" />
                </ListItemAvatar>
                <ListItemText
                  primary={v.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {v.description.slice(0, 50)}
                      </Typography>
                      <Typography>
                        {"QTY"}
                        <AiOutlinePlusSquare
                          onClick={() => updateQty("+", v.id)}
                          size={22}
                          className="plus-minus"
                        />
                        {v.qty}
                        <AiOutlineMinusSquare
                          onClick={() => v.qty > 1 && updateQty("-", v.id)}
                          size={23}
                          className="plus-minus"
                        />
                      </Typography>

                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Rs {v.price * v.qty} $
                      </Typography>
                    </React.Fragment>
                  }
                />
                <MdOutlineDelete
                  onClick={() => delbutton(v.id)}
                  className=" del-icons"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
             
            </div>
          );
        })}
        <div className="btn-checkout">
        <NavLink to={'/check'}><Button  style={{color: "white", fontSize: "20px"}} size="small">checkout</Button></NavLink>
        </div>
    </List>
  );
}
export default AlignItemsList;
