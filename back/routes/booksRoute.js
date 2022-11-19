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
router.route('/books').get(isAuthenticatedUser, authorizeRoles("user"), getBooks)

//Route to create a new book
router.route('/book/new').post(isAuthenticatedUser, authorizeRoles("user"), newBook);

//Route to find a book by Id
router.route('/book/:id').get(isAuthenticatedUser, authorizeRoles("user"), getBookById); 

//Route for updating a book
router.route('/book/:id').put(isAuthenticatedUser, authorizeRoles("user"), updateBook);

//Route for deleting a book
router.route('/book/:id').delete(isAuthenticatedUser, authorizeRoles("user"), deleteBook);

module.exports = router;