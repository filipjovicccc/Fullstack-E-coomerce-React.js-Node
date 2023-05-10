const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.get("/test",(req, res) =>{
    
   
    const user={
        name: "Filip",
        lastName: "Jovic"
    }


    res.send(user)
   
})



app.listen(4000, ()=> {
    console.log("Server running")
})



