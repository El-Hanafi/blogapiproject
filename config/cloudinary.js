const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

//configure cloudinary

cloudinary.config({
    cloud_name: process.env.cloudinary_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_ECRET_KEY
});

//Instance of cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    parmas:{
        folder: 'blog-api',
        transformation: [{width: 500, height: 500, crop: "limit"}],
    }
});

module.exports = storage;