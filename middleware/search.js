export default (objRep) => {
  const {bookModel} = objRep;
  return (req, res, next) => {
    if (typeof req.body.search == 'undefined') {
      return res.status(400).json({error: 'Missing search!'});
    } 
  
    const s = req.body.search;
    const allBooks = bookModel.find();
    return res.json(allBooks.filter(e => e.author.includes(s) || e.title.includes(s)));
  }
}

