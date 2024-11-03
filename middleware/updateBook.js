export default (objRep) => {
  const {bookModel, db} = objRep;
  return (req, res, next) => {
    if (typeof req.body.title !== 'undefined'){
      res.locals.book.title = req.body.title;
    } 
    if (typeof req.body.author !== 'undefined') {
       res.locals.book.author = req.body.author;
    }

    bookModel.update(res.locals.book);
    db.saveDatabase(err => {
      //err
      return next();
      //return res.json(res.locals.book);
    });
    
    
    /*return res.status(400).json({error: 'Missing title or author!'});*/
  }
}

