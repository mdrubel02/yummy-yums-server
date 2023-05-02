const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const chefs = require('./data/chefs.json')


app.get('/', (req, res) => {
    res.send('chef api running');
});

app.get('/chefs', (req,res)=>{
    res.send(chefs)
})

app.listen(port, () => {
    console.log('chef ', port);
})