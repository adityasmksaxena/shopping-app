const mongoose = require('mongoose');
const { dbUrl } = require('./index');

const connectDb = (url = dbUrl, opts = {}) =>
  mongoose.connect(url, {
    ...opts,
    useCreateIndex: true,
    useNewUrlParser: true,
  });

const disconnectDb = () => mongoose.connection.close();

module.exports = { connectDb, disconnectDb };
