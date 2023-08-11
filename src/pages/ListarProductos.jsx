import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const ListarProductos = () => {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setItems(resp.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Grid
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       {items.map((p, index) => (
        <Link to={`/details/${p.id}`} key={p.id} style={{ textDecoration: 'none' }}>
          <Item p={p} style={{ margin: '20px' }} />
        </Link>
      ))}
    </Grid>
  );
};

export default ListarProductos;
