const multer = require('multer');

const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');

const { cloudinary } = require('../utils/cloudinary');
const { upload } = require("../utils/multer");

exports.uploadImage = catchAsync(async (req, res, next) => {

    let cloudinaryResponse;

    if (req.file) {

        cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true, // use original filename
            folder: 'trials', // folder name in cloudinary
        });
        console.log('cloudinaryResponse: ', cloudinaryResponse);
    } else {
        return next(new AppError('Please provide a file', 400));
    }

    res.status(200).json({
        status: 'success',
        data: {
            imageUrl: cloudinaryResponse?.url,
        },
    });
});
