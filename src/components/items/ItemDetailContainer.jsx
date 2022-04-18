import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import  promesas from '../../utils/promesas';


const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    useEffect(()=>{ //va adentro porque controla l que queremos renderizar (se rend. cuando cambia props o estado) y en que momento 
        promesas(1000, item[0])
            .then((res)=>{
               setItem(res); // console.log(res)
            })
    }, [])

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
};

export default ItemDetailContainer