const mongoose=require("mongoose")

const booksSchema = mongoose.Schema({
    
    isbn: {
        type: String, 
        required: [true, "Please enter your book's ISBN."],
        trim: false
    },

    title:{
        type:String,
        required:[true,"Please enter your book's title."],
        trim:true,
        maxLength:[150,"Book's title can't exceed 150 characters"]
    },

    author:{
        type: String,
        required:[true,"Please enter book's author."],
        trim: true,
        maxLength:[150, "Book's author can't exceed 150 characters"],
    
    },

    description:{
      type:String,
      required:[true,"Please enter a description."]
    },

    pages:{
        type: Number,
        default: 0
    },

    rating:{
        type: Number,
        default: 0
    },

    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    genre:{
        type:String,
        required:[true,"Please select a genre"],
        enum:{
            values:[
                "Fiction",
                "Non-Fiction"
            ]
        }
    },
    
    review: {    
        type: String,
                
    },

    status: {
        type:String,
        required:[true,"Please select a status"],
        enum:{
            values:[
                "Read",
                "Unread",
                "Partly-read",
                "Borrowed",
                "lent"
            ]
        }
    },

    date:{
        type:Date,
        default:Date.now
    }

})

// Exportar modulo con formato mongoose con el nombre que yo quiera (books) y 
// que corresponda al esquema creado (booksSchema)
module.exports=mongoose.model("books", booksSchema)