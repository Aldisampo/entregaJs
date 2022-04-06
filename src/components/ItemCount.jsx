import Button from 'react-bootstrap/Button'
import React, { useState } from "react"

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(1);

    function adding () {
        if(count < stock) {
        setCount(count + 1);}
    }
    function subs (){ 
        if(count > 0) {
        setCount(count - 1);}
    }
    function onAdd (){
        alert(`you added`+ count + `items to your cart`);
    }


    return (
        <div>
            <Button onClick={subs} variant="secondary">-</Button>
            <p>{count}</p>
            <Button onClick={adding}  variant="secondary">+</Button>
            <Button variant="warning">Comprar</Button>

        </div>
    )
}

export default ItemCount 