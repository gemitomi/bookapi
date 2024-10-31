import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse application/json
app.use(bodyParser.json());

let globalId = 3;
const books = [
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
];

const getBooks = (req, res, next) => {
  console.table(books);
  return res.json(books);
}

const getBookIndex = (req, res, next) => {
  const bookIdAsNumber = parseInt(req.params.id, 10);
  let foundId = -1;
  for (let i=0; i<books.length; i++) {
    if (books[i].id === bookIdAsNumber) {
      foundId = i;
      break;
    }
  }

  if (foundId === -1) {
    return res.status(404).json({error: `Book not meg: ${req.params.id}`});
  }
  res.locals.bookId = foundId;
  return next();
}

const createBook = (req, res, next) => {
  if (typeof req.body.title == 'undefined' || typeof req.body.author == 'undefined') {
    return res.status(402).json({error: 'Missing title or author!'});
  } 
  const newBook = {
    id: globalId,
    title: req.body.title,
    author: req.body.author
};
books.push(newBook);
globalId++;

  return res.json(newBookcu);
}

const deleteBook = (req, res, next) => {
  const deletedBook = books[res.locals.bookId];
  books.splice(res.locals.bookId,1);
  delete books[res.locals.bookId];

  return res.json(deletedBook);
}

const updateBook = (req, res, next) => {
  return next();
}

const search = (req, res, next) => {
  return next();
}

app.get('/book', getBooks);
app.get('/book/:id', getBookIndex);
app.put('/book', createBook);
app.delete('/book/:id', getBookIndex, deleteBook);
app.patch('/book/:id', getBookIndex, updateBook);
app.post('/search', search);

app.listen(3000, function () {
  console.log('Running on: 3000');
});