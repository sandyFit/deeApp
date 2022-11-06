const myBook = require('../models/booksModel') // importar el modelo

// Create a new book /api/books
exports.newBook = async (req, res, next) => {

    const book = await myBook.create(req.body); //

    res.status(201).json({
        success: true,
        message: "successful book registration",
        book
    })
}

// Find All Books (list)
exports.getBooks = async (req, res, next) => {

    const books = await myBook.find();
    // Cuando todo está ok (status 200) responda un json que envie un mensaje
    res.status(200).json({
        success: true,
        registered_books: books.length,
        message: "This is the Book's List",
        books
    })
}

// Find a book by Id
exports.getBookById = async (req, res, next) => {

    const book = await myBook.findById(req.params.id)

    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        })
    }

    res.status(200).json({
        success: true,
        message: "Book found: ",
        book
    })
}

// Update Book
exports.updateBook = async (req, res, next) => {
    
    // First we need to verify the object (book) exists
    let book = await myBook.findById(req.params.id) 
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        })
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
}

// Delete Book
exports.deleteBook = async (req, res, next) => {
    const book = await myBook.findById(req.params.id) 

    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        })
    }

    await book.remove();//Eliminamos el proceso
    res.status(200).json({
        success: true,
        message: "The book has been deleted"
    })
}