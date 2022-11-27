import axios from 'axios';
import {
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL,
    NEW_BOOK_REQUEST,
    NEW_BOOK_SUCCESS,
    NEW_BOOK_FAIL, 
    CLEAR_ERRORS,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL,
    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL
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

//REGISTER NEW BOOK
export const newBook = ( bookData ) => async (dispatch)=>{
    try {
        dispatch({type: NEW_BOOK_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/book/new', bookData, config)

        dispatch({
            type: NEW_BOOK_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: NEW_BOOK_FAIL,
            payload: error.response.data.message
        })
    }
}
// DELETE A BOOK
export const deleteBook = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BOOK_REQUEST })
        const { data } = await axios.delete(`/api/book/${id}`)
        
        dispatch({
            type: DELETE_BOOK_SUCCESS,
            payload: data.success           
        })

    }
    catch (error) {
        dispatch({
            type: DELETE_BOOK_FAIL,
            payload: error.response.data.message

        })
    }
}

// UPDATE A BOOK
export const updateBook = (id, bookData) => async (dispatch) => { 
    try {
        dispatch({ type: UPDATE_BOOK_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.put(`/api/book/${id}`, bookData, config)
        
        dispatch({
            type: UPDATE_BOOK_SUCCESS,
            payload: data.success           
        })

    }
    catch (error) {
        dispatch({
            type: UPDATE_BOOK_FAIL,
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