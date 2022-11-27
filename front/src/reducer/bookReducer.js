import {
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAIL,
    CLEAR_ERRORS,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL,
    NEW_BOOK_REQUEST,
    NEW_BOOK_SUCCESS,
    NEW_BOOK_FAIL,
    NEW_BOOK_RESET,    
    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL,
    UPDATE_BOOK_RESET,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL,
    
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

// REDUCER FOR NEW BOOK REGISTRATION
export const newBookReducer = (state={ book:{} }, action )=>{
    switch(action.type){

        case NEW_BOOK_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_BOOK_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                book: action.payload.book
            }

        case NEW_BOOK_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case NEW_BOOK_RESET:
            return{
                ...state,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}

export const bookReducer= (state = {}, action)=>{
    switch(action.type){
        case DELETE_BOOK_REQUEST:
        case UPDATE_BOOK_REQUEST:
            return{
                ...state, 
                loading:true
            }
        case DELETE_BOOK_SUCCESS:
            return{
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_BOOK_SUCCESS:
            return{
                ...state,
                loading: false,
                isUpdated: action.payload
            }
            
        case DELETE_BOOK_FAIL:
        case UPDATE_BOOK_FAIL:
            return{
                ...state,
                error: action.payload
            }
            
        case UPDATE_BOOK_RESET:
            return{
                ...state,
                isUpdated: false
            }
        case CLEAR_ERRORS:
            return {
                error:null
            }
        default:
            return state
    }
}

