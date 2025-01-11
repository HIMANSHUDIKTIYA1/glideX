dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();
app.cors(cors());
app.get('/', (req, res)=> {
res.send("this is backend ")
})
app.get('/' , (req,res) =>{
    res.render(index)
})

module.exports = app;