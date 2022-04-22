import React from 'react'
import Item from './Item'

function ItemList({ productos }) {
    return (
        productos.map(producto => (
            <Item
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}/>
        ))
    )
}

export default ItemList