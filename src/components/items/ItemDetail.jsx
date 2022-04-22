import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ imagen, nombre, precio, stock, category }) => {
    const [number, setNumber] = useState(0);

    const addCart = (cantidad) => {
      setNumber(cantidad);
    };

    return (
        <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          component={imagen}
          height="1040"
          image={imagen}
          alt={nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic aliquam error ab sed recusandae repellat explicabo quod saepe commodi maxime eaque cum rerum ut eligendi debitis, corporis tempora quos.</h2>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>

          <ItemCount stock={stock} initial={1} addCart={addCart}/>

        </CardContent>
      </Card>
        
    );
};

export default ItemDetail;

