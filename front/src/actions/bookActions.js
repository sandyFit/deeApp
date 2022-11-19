import axios from 'axios';
import {
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/bookConstants';

export const getBooks = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BOOKS_REQUEST })
        
        //axios se comunica con la ruta (api/productos), ejecuta un get dentro de la ruta
        //y lo que le responda lo guarda en data (como lo hace postman)
        // En este punto el front ya tiene la información (data)
        const { data } = await axios.get('api/books')
        
        dispatch({
            type: ALL_BOOKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_BOOKS_FAIL,
            payload: error.response.data.message
        })
    }
}

// SEE BOOK DETAILS
export const getBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/book/${id}`)

        dispatch({
            type: BOOK_DETAILS_SUCCESS,
            payload: data.book
        })
    } catch (error) {
        dispatch({
            type: BOOK_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}