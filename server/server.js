const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req,res) => {
    axios.get('http://www.omdbapi.com/?s=' + req.query.movie + '&apikey=8730e0e')
        .then(response => {
            res.send(response.data);
        });
});

module.exports = app;
