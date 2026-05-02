const multer = require('multer')
const path = require('path')

// set storage for uploaded images
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        var newname = Date.now() + path.extname(file.originalname)
        cb(null, newname)
    }
})

var upload = multer({ storage: storage })

module.exports = upload
