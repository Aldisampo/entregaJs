import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { AddCardTwoTone } from '@mui/icons-material';

const ItemCount = ({stock, initial, addCart}) => {
    const [number, setNumber] = useState(initial);

    const add = () =>{
        number < stock && setNumber(number + 1)
    };
    const substract = () =>{
        number > initial && setNumber(number - 1)
    };

    return (
        <div>
            
            <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button disabled={number === initial} onClick={substract} size="large">-</Button>
            <Button size="large"><p>{number}</p></Button>
            <Button disabled={number === stock} onClick={add} size="large">+</Button>
            </ButtonGroup> <br></br>
            <Button onClick={() => addCart(number)}  variant="outlined" size="large">comprar</Button>
       </div>
    )
}

export default ItemCount 