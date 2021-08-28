import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    nombre:'Gerson',
    edad: 22
}


export const DataProvider = ({children}) =>{

    const [data, setData] = useState(dataFixed);
    const [ contador, setContador ] = useState(0);
    const [ productos, setProductos ] = useState([]);
    const [ listado, setListado ] = useState([]);

    const handleContador = () =>{
        setContador(contador + 1);
    }

    const handleDecrementar = () =>{
        setContador(contador -1);
    }

    const obtenerProductos = async() =>{
        const response = await axios.get('https://fakestoreapi.com/products');
        //console.log(response.data);
        setProductos(response.data)
    }

    const handleProducto = (producto) =>{
        //console.log(producto);
        setListado([...listado, producto]);
    }

    const quitarProducto = (uid) =>{
        const data = listado.filter( res => res.id !== uid);
        setListado(data);
    }

    return(
       <DataContext.Provider value={{
           data,
           setData,
           contador,
           handleContador,
           handleDecrementar,
           obtenerProductos,
           productos,
           handleProducto,
           listado,
           quitarProducto
       }}>
           {children}
       </DataContext.Provider>
    )
}