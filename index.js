const express = require("express")
process.loadEnvFile()


const app = express()

const PORT = process.env.PORT
/*
const funcion = (A) => {

}
*/

app.get("/", (req, res) =>{
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log("Corriendo")
} )

