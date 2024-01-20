import removeFileExtension from "./remove-file-extension";

/**
 * Has knowledge of the image file structure
 * thus returns the proper path to be used in
 * file system methods
 */
export default function getFullImagePath(fileName: string): string {
    const cleanedFileName = removeFileExtension(fileName);
    return `assets/full/${cleanedFileName}.jpg`;
}