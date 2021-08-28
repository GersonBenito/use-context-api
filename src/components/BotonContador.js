import React, { useContext } from 'react'
import styled from 'styled-components';
import { DataContext } from '../context/DataContext';

export const BotonContador = () => {
    const { handleContador } = useContext( DataContext );

    return (
        <>
            <Button onClick={()=>handleContador()} >Aumentar</Button>
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
