import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactStars from "react-stars";
import MuiAlert from "@mui/material/Alert";

import Snackbar from "@mui/material/Snackbar";
import CartContext from "../Context/Context";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MediaCard({ data, viewDetails }) {
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const addtocart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push({ ...data, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cartData));

    setCart(cartData);
    setOpen(true);
  };

  return (
    <Card sx={{ width: 280, marginLeft: 10, marginBottom: 10 }}>
      <div className="image">
        <img src={data.image} alt="" />
      </div>
      <CardMedia />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This Product Added In Cart
        </Alert>
      </Snackbar>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.title.slice(0, 20)}...
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price {data.price} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description.slice(0, 20)}......
        </Typography>
        <ReactStars
          count={5}
          value={3}
          edit={false}
          size={26}
          color2={"#ffd700"}
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={addtocart}
          style={{ backgroundColor: "green", color: "#fff", padding: 5 }}
          size="small"
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => viewDetails(data.id)}
          style={{ border: "2px solid green", color: "black" }}
          className="hov"
          size="small"
        >
          view Details
        </Button>
      </CardActions>
    </Card>
  );
}
