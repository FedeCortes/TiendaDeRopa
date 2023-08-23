import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Item from "../components/Producto";
import Box from "@mui/material/Box";

const cart = () => {
  const [items, setItems] = useState([]);
  const [precioTotal, setPrecioTotal] = useState({});

  const getItems = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp.data);

    if (resp.data.lenght > 0) {
      setItems(resp.data);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          height: "100vh",
        }}
        style={{
          backgroundColor: "#282c34",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
        }}
      >
        {items.length > 0 &&
          items.map((p, index) => {
            return (
              <Link
                to={`/Details/${p.id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Item p={p} sx={{ margin: "8px" }} />
              </Link>
            );
          })}

        {items.length == 0 && <h1>No cart items found</h1>}
      </Box>
    </>
  );
};

export default cart;
