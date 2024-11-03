import { v4 as uuidv4 } from 'uuid';

import createBookMW from '../middleware/createBook.js';
import getBooksMW from '../middleware/getBooks.js';
import getBookMW from '../middleware/getBook.js';
import deleteBookMW from '../middleware/deleteBook.js';
import updateBookMW from '../middleware/updateBook.js';
import searchMW from '../middleware/search.js';

export function addRoutes(app, db, bookModel) {
  let globalId = 3;

  const objRep = {
    bookModel,
    db,
    uuidv4
    
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
  };

  app.get('/book', getBooksMW(objRep));
  app.get('/book/:id', getBookMW(objRep), (req, res, next) => res.json(res.locals.book));
  app.put('/book', createBookMW(objRep));
  app.delete('/book/:id', getBookMW(objRep), deleteBookMW(objRep));
  app.patch('/book/:id', getBookMW(objRep), updateBookMW(objRep));
  app.post('/search', searchMW(objRep));
}

