import removeFileExtension from "./remove-file-extension";

interface ImageSize {
    width: number
    height: number
}

/**
 * Has knowledge of the image file structure
 * thus returns the proper path to be used in
 * file system methods
 */
export default function getImagePath(fileName: string, imageSize?: ImageSize): string {

    let folder = 'full';

    // check if image size was provided
    if (imageSize) {
        folder = `${imageSize.width}x${imageSize.height}`
    }

    const cleanedFileName = removeFileExtension(fileName);
    return `assets/${folder}/${cleanedFileName}.jpg`;
}