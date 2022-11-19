const express = require('express')
const app = express();
const errorMiddleware = require('./middleware/errors')
const cookieParser = require('cookie-parser')

// Using imported consts
app.use(express.json())
app.use(cookieParser()) // should be active before the routes

//Importing Routes
const books = require('./routes/booksRoute')
const users = require('./routes/authRoute')

// Browser's default routes
app.use('/api', books)
app.use('/api', users)

//Middleware to handle errors globally
app.use(errorMiddleware)

module.exports = app