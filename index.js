const express = require('express');
const app = express();
const portServer = process.env.PORT || 5000; 
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressWs = require('express-ws')(app);
// parse application/x-www-form-urlencoded
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

routes(app);

app.listen(portServer, () => {
    console.log(`server's listening on port ${portServer}`)
});
