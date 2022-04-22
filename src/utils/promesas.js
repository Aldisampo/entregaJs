import productos from "./productos";

    const promesas = (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(productos);
                }, 1000);
            });
    };


export default promesas;