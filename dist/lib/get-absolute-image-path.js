"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param currentDirName should be __dirname wherever is being called
 * @param imagePath value returned by getImagePath function
 * @param sourceFolder shuould be the name of the folder where source code is (defaults to "src")
 */
function getAbsoluteImagePath(currentDirName, imagePath, sourceFolder) {
    if (sourceFolder === void 0) { sourceFolder = 'src'; }
    var array = currentDirName.split(sourceFolder);
    return "".concat(array[0]).concat(imagePath);
}
exports.default = getAbsoluteImagePath;
