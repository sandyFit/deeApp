import { createStore, combineReducers, applyMiddleware } from 'redux';
/* thunk es una función que actúa como un wrapper ya que envuelve una expresión 
para retrasar su evaluación 
Así, thunk puede ser usado para retrasar el envío de una acción hasta que se cumpla una 
línea de código asíncrona.*/
import thunk from 'redux-thunk'; 
import { composeWithDevTools} from 'redux-devtools-extension';
import { booksReducer, bookDetailsReducer } from './reducer/bookReducer';

const reducer= combineReducers ({
    books: booksReducer,    
    bookDetails: bookDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)
    ))

export default store;