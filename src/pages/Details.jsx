import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Details = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const resp = await axios.get('https://fakestoreapi.com/products');
    setProductos(resp.data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const { id } = useParams();
  const productId = parseInt(id, 10);
  const producto = productos.find((p) => p.id === productId);

  return (
    <div>
      {producto && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <img
              src={producto.image}
              alt={producto.title}
              style={{ width: '500px', height: '500px' }}
            />
          </div>
          <div >
            <div style={{marginBottom:"25px"}}>
            <Typography variant="h3">{producto.title}</Typography>
            <Typography>${producto.price}</Typography>
            </div>
            
            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>
              Agregar al carrito
            </Button>
            <div style={{marginTop:"25px",marginLeft:"80px",marginRight:"80px"}}>
            <Typography variant="p">{producto.description}</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;