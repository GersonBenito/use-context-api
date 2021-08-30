import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { incrementarContador } from '../../redux/ContadorDuck';

export const ContadorRedux = () => {

    const dispatch = useDispatch();
    //const incrementar = useSelector(store => store.Contador);
    return (
        <div>
            <h1>Contador con redux</h1>
            <Button onClick={()=>dispatch(incrementarContador())} >Incrementar + 1</Button>
            <hr />
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
