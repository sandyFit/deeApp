import {
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAIL,
    CLEAR_ERRORS,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL
} from "../constants/bookConstants";

export const booksReducer = (state ={ books: []}, action)=>{
    switch(action.type){
        case ALL_BOOKS_REQUEST:
            return{
                loading: true,        
                books:[] // Mismo nombre del getProducts
            }

        case ALL_BOOKS_SUCCESS:
            return{
                loading: false,
                // Mismo nombre que tiene la constante del getProducts en el productsController del back
                books: action.payload.books, //La acción es cargar productos
                count: action.payload.count //La acción es cargar cantidad
            }

        case ALL_BOOKS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error: null //Borra los errores
                
            }
        

        default:
            return state; //estado por defecto: init
    }
}

//REDUCER PARA TENER TODOS LOS DETALLES
export const bookDetailsReducer = (state = { book: {} }, action) => {
    switch (action.type) {

        case BOOK_DETAILS_REQUEST:
            return {
                ...state, // ....spread por si hay tardanza
                loading: true
            }

        case BOOK_DETAILS_SUCCESS:
            return {
                loading: false,
                book: action.payload
            }

        case BOOK_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}