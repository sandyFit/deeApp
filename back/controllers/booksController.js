const myBook = require('../models/booksModel'); // importing model
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

// Create a new book /api/books
exports.newBook = catchAsyncErrors(async (req, res, next) => {

    const book = await myBook.create(req.body); //

    res.status(201).json({
        success: true,
        message: "successful book registration",
        book
    })
})

// Find All Books (list)
exports.getBooks = catchAsyncErrors(async (req, res, next) => {

    const books = await myBook.find();
    // If everything is ok (status 200) send a json response with a message
    if (!books) {
         return next(new ErrorHandler('No data available', 404))
    }
    res.status(200).json({
        success: true,
        registered_books: books.length,
        books
    })
})

// Find a book by Id
exports.getBookById = catchAsyncErrors(async (req, res, next) => {

    const book = await myBook.findById(req.params.id)

    if (!book) {
        return next(new ErrorHandler('Book not found', 404))
    
    }

    res.status(200).json({
        success: true,
        message: "Book found: ",
        book
    })
})

// Update Book
exports.updateBook = catchAsyncErrors(async (req, res, next) => {
    
    // First we need to verify the object (book) exists
    let book = await myBook.findById(req.params.id) 
    if (!book) {
         return next(new ErrorHandler('Book not found', 404))
    }

    // If the object exist -> the method findByIdAndUpdate executes de update
    book = await myBook.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Verify only updated attributes
        runValidators: true
    });
    
    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        book
    })
})

// Delete Book
exports.deleteBook = catchAsyncErrors(async (req, res, next) => {
    const book = await myBook.findById(req.params.id) 

    if (!book) {
         return next(new ErrorHandler('Book not found', 404))
    }

    await book.remove();//Delete the process
    res.status(200).json({
        success: true,
        message: "The book has been deleted"
    })
})