import React from 'react';


const ItemDetail = ({ item }) => {

    return (
        <div>
            {item &&
               <h1>{item.nombre}</h1>}
               <img src={item.imagen} alt={item} />
        </div>
        
    );
};

export default ItemDetail;