const express = require('express')

const  app = express()

app.use(express.json());

app.listen(2000, async()=>{
    try {
        console.log("connected to bd")
    } catch (error) {
        console.log({msg:error.message})
    }

    console.log(`server is connected at port 2000`)
})