const mongoose = require('mongoose');

mongoose
    .connect("mongodb://Localhost/stuffsDB",
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
    .then((db) => console.log("Base de datos connected"))
    .catch((err) => console.error(err));