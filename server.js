const app = require("./app")
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION.replace("<PASSWORD>", process.env.DB_PASSWORD))
.then(()=> console.log("Database connected successfully!"))
.catch(err => console.error(err))


const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})
