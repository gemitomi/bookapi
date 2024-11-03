import { v4 as uuidv4 } from 'uuid';

import createBookMW from '../middleware/createBook.js';
import getBooksMW from '../middleware/getBooks.js';
import getBookMW from '../middleware/getBook.js';
import deleteBookMW from '../middleware/deleteBook.js';
import updateBookMW from '../middleware/updateBook.js';
import searchMW from '../middleware/search.js';
import renderMW from '../middleware/render.js';

export function addRoutes(app, db, bookModel) {
  
  const objRep = {
    bookModel,
    db,
    uuidv4
  };
//API
  app.get('/api/book', getBooksMW(objRep), (req, res, next) => res.json(res.locals.books));
  app.get('/api/book/:id', getBookMW(objRep), (req, res, next) => res.json(res.locals.book));
  app.put('/api/book', createBookMW(objRep), (req, res, next) => res.json(res.locals.book));
  app.delete('/api/book/:id', getBookMW(objRep), deleteBookMW(objRep), (req, res, next) => res.json(res.locals.book));
  app.patch('/api/book/:id', getBookMW(objRep), updateBookMW(objRep), (req, res, next) => res.json(res.locals.book));
  app.post('/api/search', searchMW(objRep));


//Website
app.get('/deletebook/:id', getBookMW(objRep), deleteBookMW(objRep), (req, res, next) => res.redirect("/"));
app.post('/editbook/:id', getBookMW(objRep), updateBookMW(objRep), (req, res, next) => res.redirect("/"));
app.get('/editbook/:id', getBookMW(objRep), renderMW(objRep, 'newbook'));
app.post('/newbook', createBookMW(objRep), (req, res, next) => res.redirect("/"));
app.get('/newbook', renderMW(objRep, 'newbook'));
app.get('/', getBooksMW(objRep), renderMW(objRep, 'index'));
}


/*globalId,
    books: [
      {
        id: 1,
        title: 'Furfangos kis répa a subidubik országában',
        author: 'Kukucska Berci'
      },
      {
        id: 2,
        title: 'Pufi szögbe lép',
        author: 'Trufa Tufa'
      }
    ]*/
