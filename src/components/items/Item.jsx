import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({id, nombre, precio, imagen, category}) => {
    return (
            <Card key={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt="buzos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link to={`/item/${Item.id}`}>Ver detalle</Link>
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={5} initial={1}/>
      </CardActions>
    </Card>
  )
}

export default Item