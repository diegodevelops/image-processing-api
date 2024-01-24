import express from 'express';
import getImagePath from '../lib/get-image-path';
import doesFileExist from '../lib/does-file-exist';
import ImagesQuery from '../lib/ImagesQuery';
import path from 'path';
import resizeImage from '../lib/resize-image';

const images = express.Router();

images.use('/', async (req, res) => {
  const getAbsoluteImagePath = (imagePath: string) => {
    return path.join(__dirname, '../..', imagePath);
  };

  try {
    // get query
    const imagesQuery = new ImagesQuery(req.query);

    // send 400 status if at least 'file_name' param
    // was not provided
    if (!imagesQuery.hasFileName()) {
      res.status(400).send('400: Must provide "file_name" value in query');
      return;
    }

    const fileName = imagesQuery.fileName as string;

    // get file path of full image sized image
    const originalFilePath = getImagePath(fileName);

    // check if image with filename exist
    const originalImageExists = await doesFileExist(originalFilePath);

    // send 404 and message if image does not exist
    if (!originalImageExists) {
      res
        .status(404)
        .send(
          `404: Oops! Image file with name "${fileName}" does not exist yet.`,
        );
      return;
    }

    // send 404 and message if height or width are invalid
    if (imagesQuery.didProvideInputWidthAndHeight()) {
      // width is invalid 
      if (!imagesQuery.didProvideValidInputWidth()) {
        res.status(404).send(`Invalid width provided "${imagesQuery.inputWidth}"`)
        return;
      }
      // height is invalid 
      if (!imagesQuery.didProvideValidInputHeight()) {
        res.status(404).send(`Invalid height provided "${imagesQuery.inputHeight}"`)
        return;
      }
    }

    // serve full sized image if width and height params weren't provided
    if (!imagesQuery.hasWidthAndHeight()) {
      const absolutePath = getAbsoluteImagePath(originalFilePath);
      res.status(200).sendFile(absolutePath);
      return;
    }

    const width = imagesQuery.width as number;
    const height = imagesQuery.height as number;

    const newFilePath = getImagePath(fileName, {
      width: width,
      height: height,
    });

    // check if exists
    const resizedImageExists = await doesFileExist(newFilePath);
    const newFileAbsolutePath = getAbsoluteImagePath(newFilePath);

    // return image if exists
    if (resizedImageExists) {
      res.status(200).sendFile(newFileAbsolutePath);
      return;
    }

    // create new resized image
    const success = await resizeImage(
      originalFilePath,
      newFilePath,
      width,
      height,
    );

    if (!success) {
      throw Error();
    }

    res.status(200).sendFile(newFileAbsolutePath);
  } catch (error) {
    res.status(500).send('Internal error');
  }
});

export default images;
