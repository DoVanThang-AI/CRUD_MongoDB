const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const UsersRoute = require("./routes/users.router.js");
const app = express()

//middleware
app.use(express.json()); 
app.use(express.urlencoded({extended : false}));

//routes
app.use("/api/products", productRoute);
app.use("/api/users",UsersRoute);

app.get('/', (req,res) => {
    res.send("hello from node API updares");
});

//path
mongoose.connect("mongodb+srv://stevendo:C1qiWmTqKynhFf5t@backenddb.f9wg2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Conected ")
    app.listen(3000, ()=>{
        console.log('Server is runing on port 3000');
    });
    
})
.catch(()=> {
    console.log('connection failed!');
});