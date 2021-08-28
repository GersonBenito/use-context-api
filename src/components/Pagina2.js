import React, { useContext } from 'react'
import styled from 'styled-components';
import { DataContext } from '../context/DataContext'
import { BotonCambiarData } from './BotonCambiarData';

export const Pagina2 = () => {

    const { data, handleDecrementar, contador } = useContext( DataContext );

    return (
        <div>
            <h1>Pagina 2</h1>
            <p>{ JSON.stringify(data, null, 2) }</p>
            <hr />
            <BotonCambiarData />
            {
                contador > 0 ? <Button onClick={()=>handleDecrementar()} >decrementar</Button> : ''
            }
            
        </div>
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
