import loki from 'lokijs';

const db = new loki('library.db');

export function initDatabase(cb){
  db.loadDatabase({}, err => {
    if (err){
      return cb(err);
    }

    let bookModel = db.getCollection("books");
    if (bookModel === null){
      bookModel = db.addCollection("books");
    }
    console.log(bookModel);
    db.saveDatabase(err => {
      cb(err, {db, bookModel});
    });
  });
}



 