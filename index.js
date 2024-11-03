import express from 'express';
/*import bodyParser from 'body-parser';*/
import { initDatabase } from './service/db.js';
import { addRoutes } from './route/index.js';


const app = express();

// parse application/json
/* app.use(bodyParser.json())*/
app.use(express.json());


initDatabase((err, {db, bookModel} ) => {
  if (err) {
    return console.error(err);
  }
  addRoutes(app, db, bookModel);
  app.listen(3000, function () {
    console.log('Running on: 3000');
  });

});