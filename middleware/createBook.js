export default (objRep) => {
  const {bookModel, db, uuidv4} = objRep;
  return (req, res, next) => {
    if (typeof req.body.title == 'undefined' || typeof req.body.author == 'undefined') {
      return res.status(400).json({error: 'Missing title or author!'});
    } 
    const newBook = {
      id: uuidv4(),
      title: req.body.title,
      author: req.body.author
    };
    bookModel.insert(newBook);
    return db.saveDatabase((err) => {
      //err
      return res.json(newBook);
    })
    
    
      
    
    /*{
      id: newBook.id,
      title: newBook.title,
      author: newBook.author
    }*/
  }
}

