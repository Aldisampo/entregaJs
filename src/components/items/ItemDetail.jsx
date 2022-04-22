import React from 'react';
import styles from './ItemDetail.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ item }) => {

    return (
        <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          component="img"
          height="1040"
          image={item.imagen}
          alt="buzos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.precio}
          </Typography>
        </CardContent>
      </Card>
        
    );
};

export default ItemDetail;

