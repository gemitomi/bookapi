export default (objRep) => {
  const {bookModel, db} = objRep;
  return (req, res, next) => {
    const deletedBook = res.locals.book;
    bookModel.remove(deletedBook);
    db.saveDatabase(err => {
      //err
      res.locals.book = deletedBook;
      return next();
    })
    
  }
}

