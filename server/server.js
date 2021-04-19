const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const PORT = process.env.PORT || 3001;

// Install and use our cors middleware which should get rid of CORS issues.
const cors = require('cors');
app.use(cors());

// Serve the static files from the React app!
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles our favicon loading from the React client.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Set up our get route.
app.get('/', (req, res) => {
    res.status(200).send('Hello!');
});

// Handles any requests that don't match the ones above!
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

// Set up our server to listen on our PORT variable.
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));