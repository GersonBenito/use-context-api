import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../context/DataContext'

const data = {
    nombre: 'Benito',
    edad: 25
}

export const BotonCambiarData = () => {

    //obtiendo setData del state de DataContext
    const { setData } = useContext( DataContext );

    const getNuevaData = () =>{
        setData(data);
    }

    return (
        <>
            <Button onClick={()=>getNuevaData()} >Cambiar datos</Button>
        </>
    )
}

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 10px;
    cursor: pointer;
`;

