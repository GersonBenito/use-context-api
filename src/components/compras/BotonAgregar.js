import React, { useContext } from 'react'
import styled from 'styled-components';
import { DataContext } from '../../context/DataContext';

export const BotonAgregar = ({data}) => {

    const { handleProducto } = useContext( DataContext );

    return (
        <Button onClick={()=>handleProducto(data)} >Agregar</Button>
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
