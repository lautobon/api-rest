'use strict'
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    DB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017',
    SECRET_TOKEN: 'miclavedetokens'
}