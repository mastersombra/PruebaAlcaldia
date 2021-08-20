const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('puerto', 6006)

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/stuffs', require('./routes/stuffs.routes'));

module.exports = app;