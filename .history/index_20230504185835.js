const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const chefs = require('./data/chefs.json')
const categories = require('./data/categories.json')
const singleChefs = require('./data/singleChef.json')



app.get('/', (req, res) => {
    res.send('chef api running');
});

app.get('/chefs', (req,res)=>{
    res.send(chefs)
})
app.get('/categories',(req,res)=>{
  res.send(categories)
})
app.get('/chefSingle/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    console.log(id)
    const selectSingle = singleChefs.find( a => a.id === id)
    console.log(selectSingle);
    // res.send(selectSingle)
    
})

app.listen(port, () => {
    console.log('chef ', port);
})