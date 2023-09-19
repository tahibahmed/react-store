import React from "react";
import MediaCard from "./Card";
import { useEffect, useState } from "react";
import "../App.css";
import { InfinitySpin } from "react-loader-spinner";

import BasicModal from "./Modal";

const Products = () => {
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [categories, setcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((datacategories) => {
        setcategories(datacategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterd = (category) => {
    setSelectedCategory(category);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      })
      .catch((error) => {
        console.error(
          `Error fetching products for category ${selectedCategory}:`,
          error
        );
      });
  };

  const alldata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="p-4 center-border">
        {categories.map((ab) => (
          <button onClick={() => filterd(ab)} className="m-3 rounded hello">
            {ab}
          </button>
        ))}
        {selectedCategory && (
          <button className=" hello  rounded" onClick={() => alldata()}>
            All{" "}
          </button>
        )}
      </div>
      <div>
        <BasicModal
          open={open}
          details={details}
          handleClose={() => setOpen(false)}
        />
      </div>
      <div className="cards">
        {loading && (
          <div className="load">
            {" "}
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        )}
        {data.map((v, i) => {
          return (
            <MediaCard
              setOpen={setOpen}
              viewDetails={viewDetails}
              data={v}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
