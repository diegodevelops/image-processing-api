import express from 'express';
import getImagePath from '../lib/get-image-path';
import doesFileExist from '../lib/does-file-exist';

const images = express.Router()

images.use('/', (req, res) => {

    // check for query parameter
    const fileName = (req.query.file_name as string) ?? ''
    const widthStr = (req.query.width as string) ?? NaN
    const heightStr = (req.query.height as string) ?? NaN

    let width: number | undefined;
    let height: number | undefined;

    if (widthStr !== '') {

    }

    // send 400 status if at least 'file_name' param
    // was not provided
    if (fileName === '') {
        res.status(400).send('Must provide "file_name" value in query')
        return;
    }

    // get file path of full image sized image
    const originalFilePath = getImagePath(fileName)

    // check if image with filename exist
    const imageExists = doesFileExist(originalFilePath);

    // send 404 and message if image does not exist
    if (!imageExists) {
        res.send(404).send(`Oops! Image file with name "${fileName}" does not exist yet.`);
        return;
    }

    // serve full sized image if width and height params weren't provided


    // check if exist

    // get image file if exist or created otherwise



    res.status(500).send('images route');
})

export default images;