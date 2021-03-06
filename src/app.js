


const path = require('path');

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('DB conectada'))
.catch(err => console.log(err));

// importando rutas

const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('views'( './src/views'));

app.set('view engine', 'ejs');
//app.get('/', function(req,res){
  //  res.render('hola');
//});


// middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', indexRoutes);



//starting server


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);

});




