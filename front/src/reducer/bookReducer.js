import {
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/bookConstants";

export const bookReducer = (state ={ books: []}, action)=>{
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