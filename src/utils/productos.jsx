
 const productos = [
    {
        id: 1,
        nombre: 'buzo mickey',
        precio: '$3.000',
        stock: 4,
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'buzos',
    },
    {
        id: 2,
        nombre: 'remera mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'remeras',
    },
    {
        id: 3,
        nombre: 'remera mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'pijamas',
    },
    {
        id: 4,
        nombre: 'pijama mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'pijamas',
    },
    {
        id: 5,
        nombre: ' buzo mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'buzos',
    },
    {
        id: 6,
        nombre: 'buzo mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'buzos',
    },
    {
        id: 7,
        nombre: 'pijama mickey',
        stock: 5,
        precio: '$1.000',
        imagen: 'https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwbe2d53ed/images/B2C/21WWSK44_2007_1.jpg?sfrm=jpg&sw=1125',
        category: 'pijamas',
    }
];


export const promesas = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (productos) => productos.category === categoryId
            );
        
        setTimeout(() => {
                if (categoryId) {
                     resolve(productosFiltrados);
                } else{
                    resolve(productos);
                }
            }, 2000);
        });
};


export default productos;

