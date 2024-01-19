"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var remove_file_extension_1 = __importDefault(require("../../lib/remove-file-extension"));
/**
 * Has knowledge of the image file structure
 * thus returns the proper path to be used in
 * file system methods
 */
function getFullImagePath(fileName) {
    var cleanedFileName = (0, remove_file_extension_1.default)(fileName);
    return "assets/full/".concat(cleanedFileName, ".jpg");
}
exports.default = getFullImagePath;
