export default (objRep) => {
  const {bookModel} = objRep;
  return (req, res, next) => {
    const allBooks = bookModel.find();
    return res.json(allBooks);
  }
}

