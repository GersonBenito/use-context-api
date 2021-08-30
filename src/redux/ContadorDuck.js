//constantes

const initialState = {
    contador: 0
}

//types
const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR';
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
const CUSTOM_CONTADOR = 'CUSTOM_CONTADOR';

//reducer
export default function contadotReduccer( state = initialState, accion ){
    console.log('accion', accion);
    console.log('state', state);

    switch(accion.type){
        case INCREMENTAR_CONTADOR:
            return {
                ...state,
                contador: accion.payload
            }
        default:
            return state
    }

}

//acciones
export const incrementarContador = (dispatch, state) =>{
    try {

        dispatch({
            type: INCREMENTAR_CONTADOR,
            payload: + 1
        })

    } catch (error) {
        console.log('errror al procesar los datos', error);
    }
}