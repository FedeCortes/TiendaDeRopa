import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Item from "../components/Producto";
import Box from "@mui/material/Box";

const cart = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp.data);

    if (resp.data.length > 0) {
      setItems(resp.data);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#000", // Color de fondo negro
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centrado horizontal
        justifyContent: "center", // Centrado vertical
        paddingTop: "40px", // Espaciado superior
      }}
    >
      {items.length > 0 ? (
        items.map((p, index) => (
          <Link
            to={`/Details/${p.id}`}
            style={{
              textDecoration: "none",
              display: "block",
              marginBottom: "16px",
            }}
            key={index}
          >
            <Item p={p} sx={{ width: "200px" }} /> {/* Ajusta el ancho de la tarjeta */}
          </Link>
        ))
      ) : (
        <h1>No cart items found</h1>
      )}
    </Box>
  );
};

export default cart;