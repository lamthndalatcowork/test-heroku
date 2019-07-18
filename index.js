const express = require('express');
const http = require('http');
const portServer = process.env.PORT || 5000;
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');
// const expressWs = require('express-ws')(app);
// parse application/x-www-form-urlencoded


const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.options('*', cors());
// parse application/json
app.use(bodyParser.json());
//
routes(app);

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(portServer, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});