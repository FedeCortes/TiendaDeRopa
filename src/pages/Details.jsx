import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Details = () => {
  const [productos, setProductos] = useState([]);
  const [favourite, setFavourite] = useState({});
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const producto = productos.find((p) => p.id === productId);

  const handleFavorite = async () => {
    const fav = axios.create({
      withCredentials: true,
    });
    const data = {
      id: id,
    };
    const resp = await fav.post("http://localhost:3000/api/addFavorite", data);

    setFavourite(!favorite);
  };

  const fillHeart = async () => {
    const fav = axios.create({
      withCredentials: true,
    });
    console.log(params.id);
    const resp = await fav.get(
      `http://localhost:3000/api/getFavorite/${params.id}`
    );
    console.log(resp.data);
    setFavourite(resp.data);
  };

  const handleCarrito = async () => {
    const carrito = axios.create({
      withCredentials: true,
    });
    const resp = await carrito.post(
      `http://localhost:3000/api/addCartItem/${params.id}`
    );

    console.log(resp.data);
  };
  useEffect(() => {
    const getProductos = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setProductos(resp.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProductos();
    fillHeart();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {producto && (
        <div
          style={{ display: "flex", alignItems: "center", maxWidth: "800px" }}
        >
          <div style={{ marginRight: "5px" }}>
            <img
              src={producto.image}
              alt={producto.title}
              style={{ width: "500px", height: "500px" }}
            />
          </div>
          <div>
            <div style={{ marginBottom: "25px" }}>
              <Typography variant="h4">
                {producto.title}{" "}
                <FavoriteIcon
                  onClick={handleFavorite}
                  color="error"
                  style={{
                    fontSize: "45px",
                    color: favourite ? "red" : "white",
                  }}
                />
              </Typography>
              <Typography>${producto.price}</Typography>
            </div>
            <Button
              variant="contained"
              onClick={handleCarrito}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Agregar al carrito
            </Button>

            <div style={{ marginTop: "25px" }}>
              <Typography>{producto.description}</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
