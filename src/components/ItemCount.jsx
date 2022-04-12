import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import React, { useState } from "react";

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial);

    function adding () {
        if(count < stock) {
        setCount(count + 1);}
    }
    function subs (){ 
        if(count > 0) {
        setCount(count > initial);}
    }
    function onAdd (){
        alert('you added'+ count + 'items to your cart');
    }

    return (
        <div>
            
            <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={subs} size="large">-</Button>
            <Button size="large"><p>{count}</p></Button>
            <Button onClick={adding} size="large">+</Button>
            </ButtonGroup> <br></br>
            <Button onClick={onAdd} variant="outlined" size="large">comprar</Button>
       </div>
    )
}

export default ItemCount 