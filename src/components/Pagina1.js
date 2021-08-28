import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { BotonContador } from './BotonContador';

export const Pagina1 = () => {

    //obtener el state de data desde el archivo de datacontext
    const { data } = useContext( DataContext );

    return (
        <div>
            <h1>Pagina 1</h1>
            <p>{JSON.stringify(data, null, 2)}</p>
            <hr />
            {/* <BotonCambiarData /> */}
            <BotonContador />
        </div>
    )
}
