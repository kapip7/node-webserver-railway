require('dotenv').config();
const hbs = require('hbs');
const express = require('express')

const app = express()
const port = process.env.PORT;

// Handlebars 
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático- Funcion Middle
app.use(express.static('public')); 
/* 
app.get('/hola-mundo',  (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
}); */


app.get('/',  (req, res) => {
    res.render('home',{
        nombre:'Karina Pineda',
        titulo:'Curso de Node'
    });
  });

app.get('/generic',  (req, res) => {
    res.render ('generic',{
        nombre:'Karina Pineda',
        titulo:'Curso de Node'
        // File(__dirname +'/public/generic.html')
    });
  });

app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre:'Karina Pineda',
        titulo:'Curso de Node'
        // File(__dirname +'/public/elements.html')
    });
  });

app.get('*',  (req, res) => {
  res.sendFile(__dirname +'/public/404.html');
});
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
    ;
})