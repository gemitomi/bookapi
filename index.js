import express from 'express';
/*import bodyParser from 'body-parser';*/
import { initDatabase } from './service/db.js';
import { addRoutes } from './route/index.js';


const app = express();

// parse application/json
/* app.use(bodyParser.json())*/
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', './views');

initDatabase((err, {db, bookModel} ) => {
  if (err) {
    return console.error(err);
  }
  /*app.use((req, res, next) => {
    res.render("index", {
      alma:'korte'
    });
  });*/
  addRoutes(app, db, bookModel);

  app.listen(3000, function () {
    console.log('Running on: 3000');
  });

});