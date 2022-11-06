const mongoose=require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Database connected to server 8000: ${con.connection.host}`)
    }).catch(con => {
        console.log(`Unable to connect database`)
    })
}

module.exports=connectDatabase;