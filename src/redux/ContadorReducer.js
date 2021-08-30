import React, { useReducer } from 'react';
import styled from 'styled-components';

//estado inicial
const initialState = {
    contador: 0
}

const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR'
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR'
const CUSTOM_CONTADOR = 'CUSTOM_CONTADOR'

const contadorReducer = (state = initialState, accion) =>{
    console.log('tipo de accion recibido', accion);
    console.log('stado de initialState', state);

    switch(accion.type){
        case INCREMENTAR_CONTADOR:
            return {
                ...state,
                contador: state.contador + 1
            }
        case DECREMENTAR_CONTADOR:
            return {
                ...state,
                contador: state.contador - 1
            }
        case CUSTOM_CONTADOR:
            return {
                ...state,
                contador: accion.payload
            } 
        default:
            return state;
    }

}

export const ContadorReducer = () => {

    const [ { contador }, dispatch ] = useReducer( contadorReducer, initialState );

    return (
        <div>
            <h1>uso de useReducer</h1>
            <h2>contador en : {contador} </h2>
            <Button onClick={()=>dispatch({type: INCREMENTAR_CONTADOR})} >incrementar +1</Button>
            <Button onClick={()=>dispatch({type: DECREMENTAR_CONTADOR})} >Decrementar - 1</Button>
            <Button onClick={()=>dispatch({type: CUSTOM_CONTADOR, payload: 100})} >incrementar en 100</Button>
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
