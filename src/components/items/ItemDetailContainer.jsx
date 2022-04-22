import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { promesa } from '../../utils/productos';

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    const { id } = useParams();

    useEffect(()=>{ //va adentro porque controla l que queremos renderizar (se rend. cuando cambia props o estado) y en que momento 
        promesa(id)
            .then((res)=>{
               setItem(res); // console.log(res)
            })
            .catch((error) =>{
                console.log(error);
            });
    }, [id]);

    return (
        <>
            <Link to="/">IR A HOME</Link>
            <ItemDetail item={item}/>
        </>
    )
};

export default ItemDetailContainer