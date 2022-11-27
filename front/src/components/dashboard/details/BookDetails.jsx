import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import MetaData from '../../layouts/Metadata'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import { useDispatch, useSelector } from 'react-redux'
import { getBookDetails, clearErrors } from '../../../actions/bookActions'
import { useParams } from 'react-router-dom' // Para encontrar el id
//import { Carousel } from 'react-bootstrap'


const BookDetails = () => {

    const { loading, book, error} = useSelector(state=> state.bookDetails)
    const alert = useAlert()
    /* Almacenar el id en una constante que es igual a lo que tenga que hacer 
    useParams para encontrar el id */
    const {id} = useParams() 
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getBookDetails(id))
        if (error){
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, id])

  return (
    <Fragment>
      {loading ? <AutorenewIcon/> : (
        <Fragment>
          <MetaData title={book.title}/>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
              <div className='col-12 col-lg-5 img-fluid m-5 w-75' id="book_image">              
                    <img className="d-block w-100" src={'https://www.timetothink.com/wp-content/uploads/2019/06/book-02.jpg' + book.image} alt={book.title}/>              
                </div>
          </div>

                <div className='col-12 col-lg-5 mt-5'>
                    <h3>{book.title}</h3>
                    <p id="book_isbn"><strong>ISBN: </strong>{book.isbn}</p>
                    <p id="book_author"><strong>Author: </strong>{book.author}</p>
                          
                    <hr />
                    <h4 className="mt-2"><strong>Description: </strong></h4>
                    <p>{book.description}</p>
                    
                          
                    <div className='rating-outer'>
                        <div className="rating-inner" style={{ width: `${(book.rating / 5) * 100}%` }}></div>
                    </div>
                    
                    <hr />
                    <p id="book_pages"><strong>Pages: </strong>{book.pages}</p>
                    <hr />
                    <p><strong>Status: </strong><span id="book_status" className={book.status}></span></p>
                    <hr />
                    
                    <p id="book_genre"><strong>Genre: </strong>{book.genre}</p>                        
                        <button id="btn_review" type="button"
                            className="btn btn-primary mt-4"
                            data-toggle="modal" data-target="#ratingModal"
                            >
                            Take Notes
                        </button>
                        
                        {/* <div className="alert alert-danger mt-5"
                            type="alert">
                            Inicia Sesión para dejar tu review
                        </div>                                                */}
                </div>
            </div>
        </Fragment>
              
        )}
    </Fragment>

  )
}

export default BookDetails