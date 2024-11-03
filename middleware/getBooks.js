export default (objRep) => {
  const {bookModel} = objRep;
  return (req, res, next) => {
    res.locals.books = bookModel.find();
    return next();
    //return res.json(res.locals.books);
  }
}

