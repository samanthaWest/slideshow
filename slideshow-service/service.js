import { routes } from './routes.js';
import express from "express";
import bodyParser from 'body-parser';

const port = 3000

const initServer = () => {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3006");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    routes(app);
    return app;
}

var app = initServer();
app.listen(port, () => console.log(`Listening on port ${port}...`))

export { initServer };