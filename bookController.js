const Book = require('../models/Book')
const fs = require('fs')

// show all books
exports.getAllBooks = function(req, res){
    Book.find()
    .then(function(data){
        var total = data.length
        res.render('index', { books: data, totalBooks: total })
    })
    .catch(function(err){
        console.log(err)
        res.send('something went wrong')
    })
}

// show add book form
exports.getAddBook = function(req, res){
    res.render('add')
}

// save new book to database
exports.postAddBook = function(req, res){
    var imgname = 'noimage.png'
    if(req.file){
        imgname = req.file.filename
    }

    var newbook = new Book({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: imgname
    })

    newbook.save()
    .then(function(){
        console.log('book saved')
        res.redirect('/books')
    })
    .catch(function(err){
        console.log(err)
        res.send('error in saving book')
    })
}

// show edit form with existing data
exports.getEditBook = function(req, res){
    var id = req.params.id
    Book.findById(id)
    .then(function(book){
        res.render('edit', { book: book })
    })
    .catch(function(err){
        console.log(err)
        res.send('book not found')
    })
}

// update book in database
exports.updateBook = function(req, res){
    var id = req.params.id

    Book.findById(id)
    .then(function(book){
        // if new image uploaded then replace old one
        if(req.file){
            if(book.image != 'noimage.png'){
                fs.unlink('uploads/' + book.image, function(err){
                    if(err) console.log(err)
                })
            }
            book.image = req.file.filename
        }

        book.title = req.body.title
        book.author = req.body.author
        book.category = req.body.category
        book.price = req.body.price
        book.quantity = req.body.quantity
        book.description = req.body.description

        return book.save()
    })
    .then(function(){
        res.redirect('/books')
    })
    .catch(function(err){
        console.log(err)
        res.send('update failed')
    })
}

// delete book from database
exports.deleteBook = function(req, res){
    var id = req.params.id

    Book.findById(id)
    .then(function(book){
        if(book.image != 'noimage.png'){
            fs.unlink('uploads/' + book.image, function(err){
                if(err) console.log(err)
            })
        }
        return Book.findByIdAndDelete(id)
    })
    .then(function(){
        res.redirect('/books')
    })
    .catch(function(err){
        console.log(err)
        res.send('delete failed')
    })
}
