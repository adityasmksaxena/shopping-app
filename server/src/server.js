const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const express = require('express');
const { PORT } = require('./config');
const { connectDb, disconnectDb } = require('./config/db');
const setupRoutes = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(cors({ exposedHeaders: 'x-auth' }));
app.use(json());
app.use(urlencoded({ extended: true }));

setupRoutes(app);

const startServer = async ({ port = PORT } = {}) => {
  try {
    await connectDb();
    const server = app.listen(port, () => {
      const originalClose = server.close.bind(server);
      server.close = async () => {
        disconnectDb();
        return originalClose();
      };
    });
    return server;
  } catch (error) {
    // eslint-disable-next-line
    return console.error(error);
  }
};

module.exports = { startServer, app };
