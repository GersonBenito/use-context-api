import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const Contador = () => {

    const { contador } = useContext( DataContext );

    return (
        <div>
            <h1>Contador con useContextApi</h1>
            <p>{ `contador en: ${contador}` }</p>
            <hr />
        </div>
    )
}


