export default (objRep) => {
  const {bookModel} = objRep;
  return (req, res, next) => {
    const oneBook = bookModel.findOne({
      id: req.params.id
    });

    if (!oneBook) {
      return res.status(404).json({error: `Book not found: ${req.params.id}`});
    }
    res.locals.book = oneBook;
    return next();

  }
}
