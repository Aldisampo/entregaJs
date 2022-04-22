import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import  promesas from '../../utils/promesas';
import productos from '../../utils/productos';
import { Link } from 'react-router-dom';


const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    useEffect(()=>{ //va adentro porque controla l que queremos renderizar (se rend. cuando cambia props o estado) y en que momento 
        promesas(1000, productos[1])
            .then((res)=>{
               setItem(res); // console.log(res)
            })
    }, [])

    return (
        <>
            <Link to="/">IR A HOME</Link>
            <ItemDetail item={item}/>
        </>
    )
};

export default ItemDetailContainer