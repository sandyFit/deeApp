const express = require("express")
const router = express.Router();

const {
    getBooks,
    newBook,
    getBookById,
    updateBook,
    deleteBook
} = require('../controllers/booksController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/authMiddle')

//Route to get all books
router.route('/books').get(getBooks)

//Route to create a new book
router.route('/book/new').post(newBook);

//Route to find a book by Id
router.route('/book/:id').get(isAuthenticatedUser, getBookById); 

//Route for updating a book
router.route('/book/:id').put(isAuthenticatedUser, updateBook);

//Route for deleting a book
router.route('/book/:id').delete(isAuthenticatedUser, deleteBook);

module.exports = router;