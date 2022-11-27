import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../../layouts/Metadata'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getBookDetails, updateBook } from '../../../actions/bookActions'
import { UPDATE_BOOK_RESET } from '../../../constants/bookConstants'
import { useNavigate, useParams } from 'react-router-dom'
import '../new/newBook.css'


export const UpdateBook = () => {
    
    const navigate = useNavigate()
    const params = useParams()

    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [category, setCategory] = useState('')
    const [pages, setPages] = useState(0)
    const [rating, setRating] = useState(0)
    const [image, setImage] = useState([])
    //const [oldImage, setOldImage] = useState([])
    
    const genres = [
        "Fiction",
        "Non-Fiction"
    ]

    const categories = [
        "Read",
        "Unread",
        "Partly-read",
        "Borrowed",
        "Lent"
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, isUpdated, error: updateError } = useSelector(state => state.book)
    const { error, book } = useSelector(state => state.bookDetails)
    const bookId = params.id;
    
    useEffect(() => {
        if (book && book._id !== bookId) {
            dispatch(getBookDetails(bookId));
        }
        else {
            setIsbn(book.isbn)
            setTitle(book.title)
            setAuthor(book.author)
            setDescription(book.description)
            setGenre(book.genre)
            setCategory(book.category)
            setPages(book.pages)
            setRating(book.rating)
            //setOldImage(book.image)
       
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (updateError) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (isUpdated) {
            alert.success("Book updated successfully");
            navigate("/books")
            dispatch({ type: UPDATE_BOOK_RESET })
        }

    }, [dispatch, alert, error, isUpdated, updateError, book, bookId])

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.set('isbn', isbn)
        formData.set('title', title)
        formData.set('author', author)
        formData.set('description', description)
        formData.set('genre', genre)
        formData.set('category', category)
        formData.set('pages', pages)
        formData.set('rating', rating)

        image.forEach(img => {
            formData.append('image', img)
        })
        dispatch(updateBook(book._id, formData))

        const onChange = e => {

            const files = Array.from(e.target.files)
       
            setImage([])


            files.forEach(file => {
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.readyState === 2) {
                        setImage(oldArray => [...oldArray, reader.result])
                    }
                }

                reader.readAsDataURL(file)
            })
        }


        return (
            <Fragment>
                <MetaData title={'Update Book'} />
                <div className="row justify-content-center">
                    <h2 className="text-center">Update a book</h2>
                    <div className="col-12 col-md-9 ">
                        <Fragment>
                            <div className="wrapper my-5">
                            
                                <form className="row g-3 shadow-lg p-5"
                                    onSubmit={submitHandler}
                                    encType='multipart/form-data'>
                                
                                    <div className="col-md-4">
                                        <label htmlFor="isbn_field">ISBN</label>
                                        <input
                                            type="text"
                                            id="isbn_field"
                                            className="form-control"
                                            value={isbn}
                                            onChange={(e) => setIsbn(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="col-8">
                                        <label htmlFor="author_field">Author</label>
                                        <input
                                            type="text"
                                            id="author_field"
                                            className="form-control"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="col-12">
                                        <label htmlFor="title_field">Title</label>
                                        <input
                                            type="text"
                                            id="title_field"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="col-md-12">
                                        <label htmlFor="description_field">Description</label>
                                        <textarea className="form-control"
                                            id="description_field"
                                            rows="6"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="col-6">
                                        <label htmlFor="genre_field">Genre</label>
                                        <select className="form-control"
                                            id="genre_field"
                                            value={genre}
                                            onChange={(e) => setGenre(e.target.value)}>
                                            {genres.map(genre => (
                                                <option key={genre} value={genre} >{genre}</option>
                                            ))}
                                        </select>
                                    </div>
                                
                                    <div className="col-md-6">
                                        <label htmlFor="category_field">Status</label>
                                        <select className="form-control"
                                            id="category_field"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}>
                                            {categories.map(category => (
                                                <option key={category} value={category} >{category}</option>
                                            ))}

                                        </select>
                                    </div>
                            
                                    <div className="col-6">
                                        <label htmlFor="pages_field">Pages</label>
                                        <input
                                            type="number"
                                            id="pages_field"
                                            className="form-control"
                                            value={pages}
                                            onChange={(e) => setPages(e.target.value)}
                                        />
                                    
                                    </div>
                                
                                    <div className="col-md-6">
                                        <label htmlFor="rating_field">Rating</label>
                                        <input
                                            type="number"
                                            id="rating_field"
                                            className="form-control"
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className='form-group'>
                                        <div className='custom-file'>
                                            <div className="mb-3">
                                                <label htmlFor='customFile' className='custom-file-label'>
                                                    Upload Images
                                                </label>
                                                <input className="form-control form-control-sm"
                                                    id="formFileSm" type="file"
                                                    onChange={onChange}
                                                    multiple
                                                />
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-12">
                                        <button type="submit"
                                            className="btn btn-new float-end"
                                            disabled={loading ? true : false}>
                                            UPDATE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Fragment>
                    </div>
                </div>
            </Fragment>
    
        )
    }
}

export default UpdateBook