import express from 'express';
import getImagePath from '../lib/get-image-path';
import doesFileExist from '../lib/does-file-exist';
import ImagesQuery from '../lib/ImagesQuery';
import path from 'path';
import resizeImage from '../lib/resize-image';

const images = express.Router()

images.use('/', async (req, res) => {

    let getAbsoluteImagePath = (imagePath: string) => {
        return path.join(__dirname, '../..', imagePath);
    }

    try {

        // get query
        const imagesQuery = new ImagesQuery(req.query);

        // send 400 status if at least 'file_name' param
        // was not provided
        if (!imagesQuery.hasFileName()) {
            res.status(400).send('Must provide "file_name" value in query')
            return;
        }

        const fileName = imagesQuery.fileName as string

        // get file path of full image sized image
        const originalFilePath = getImagePath(fileName);

        // check if image with filename exist
        const originalImageExists = await doesFileExist(originalFilePath);

        // send 404 and message if image does not exist
        if (!originalImageExists) {
            res.send(404).send(`Oops! Image file with name "${fileName}" does not exist yet.`);
            return;
        }

        // serve full sized image if width and height params weren't provided
        if (!imagesQuery.hasWidthAndHeight()) {
            let absolutePath = getAbsoluteImagePath(originalFilePath);
            res.status(200).sendFile(absolutePath)
            return;
        }

        const width = imagesQuery.width as number;
        const height = imagesQuery.height as number;

        const newFilePath = getImagePath(
            fileName, 
            { 
                width: width, 
                height: height
            }
        )

        // check if exists
        const resizedImageExists = await doesFileExist(newFilePath);

        // return image if exists
        if (resizedImageExists) {
            let absolutePath = getAbsoluteImagePath(newFilePath);
            res.status(200).sendFile(absolutePath)
            return;
        }

        // create new resized image
        const success = await resizeImage(
            originalFilePath,
            newFilePath,
            width,
            height
        )

        if (!success) {
            throw(Error())
        }
        
        res.status(200).sendFile(newFilePath);
    }
    catch (error) {
        res.status(500).send('Internal error')
    }
})

export default images;