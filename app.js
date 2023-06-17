'use strict'
require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const { DB_URL, PORT } = require('./config');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', userRoutes)


mongoose.connect(`${DB_URL}/user`)
    .then((res) => {

        console.log('🚀 Conectado a Mongodb');

        app.listen(PORT, () => {
            console.log(`API REST corriendo en http://localhost:${PORT}`)
        })
    })
    .catch(err => { throw new Error(err) })