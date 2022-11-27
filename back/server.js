const app=require("./app")
const connectDatabase = require("./config/database");

//Setear el archivo de configuración
const dotenv=require("dotenv");
dotenv.config({path: './config/config.env'})

//Configurar base de datos
connectDatabase();

//Llamemos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Server initialized in port: ${process.env.PORT} on mode: ${process.env.NODE_ENV}`)
})