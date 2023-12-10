
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
connectToMongo();
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000

// Using the '/foodapp/user' route for user-related endpoints
app.use('/foodapp/user', require('./route/userentry'));

// Using the '/foodapp/items' route for item-related endpoints
app.use('/foodapp/items', require('./route/itementry'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

