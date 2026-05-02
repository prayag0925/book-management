const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const upload = require('../config/multerConfig')

router.get('/', bookController.getAllBooks)

router.get('/add', bookController.getAddBook)

router.post('/add', upload.single('image'), bookController.postAddBook)

router.get('/edit/:id', bookController.getEditBook)

router.put('/edit/:id', upload.single('image'), bookController.updateBook)

router.delete('/delete/:id', bookController.deleteBook)

module.exports = router
