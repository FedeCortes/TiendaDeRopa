import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Details = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const producto = productos.find((p) => p.id === productId);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const resp = await axios.get('https://fakestoreapi.com/products');
        setProductos(resp.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getProductos();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {producto && (
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '800px' }}>
          <div style={{ marginRight: '5px' }}>
            <img
              src={producto.image}
              alt={producto.title}
              style={{ width: '500px', height: '500px' }}
            />
          </div>
          <div>
            <div style={{ marginBottom: '25px' }}>
              <Typography variant="h4">{producto.title} <FavoriteIcon color="error" style={{ marginLeft: '10px' }} /></Typography>
              <Typography>${producto.price}</Typography>
            </div>
            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>
              Agregar al carrito
            </Button>
            
            <div style={{ marginTop: '25px' }}>
              <Typography>{producto.description}</Typography>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;