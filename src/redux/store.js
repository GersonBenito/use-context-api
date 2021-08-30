import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools }from 'redux-devtools-extension';

//importamos el archivo del contadorDuck
import contadorDuck from '../redux/ContadorDuck';

const rootReducer = combineReducers({
    contador: contadorDuck
})

export default function generarStore(){
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) );
    return store
}