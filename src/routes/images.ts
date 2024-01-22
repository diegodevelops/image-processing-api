import express from 'express';
import getImagePath from '../lib/get-image-path';
import doesFileExist from '../lib/does-file-exist';
import ImagesQuery from '../lib/ImagesQuery';
import path from 'path';

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
        const originalFilePath = getImagePath(fileName)

        console.log(`originalFilePath => ${originalFilePath}`)


        // check if image with filename exist
        const originalImageExists = await doesFileExist(originalFilePath);

        console.log(`originalImageExists => ${originalImageExists}`)


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

        const newFilePath = getImagePath(
            fileName, 
            { 
                width: imagesQuery.width as number, 
                height: imagesQuery.height as number
            }
        )

        console.log(`newFilePath => ${newFilePath}`)

        // check if exists
        const resizedImageExists = await doesFileExist(newFilePath);

        console.log(`resizedImageExists => ${resizedImageExists}`)

        // return image if exists
        if (resizedImageExists) {
            let absolutePath = getAbsoluteImagePath(newFilePath);
            res.status(200).sendFile(absolutePath)
            return;
        }

        // create new resized image
        


        res.status(500).send('images route');
    }
    catch (error) {
        res.status(500).send('Internal error')
    }
})

export default images;