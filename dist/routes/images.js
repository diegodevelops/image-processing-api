"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var get_image_path_1 = __importDefault(require("../lib/get-image-path"));
var does_file_exist_1 = __importDefault(require("../lib/does-file-exist"));
var images = express_1.default.Router();
images.use('/', function (req, res) {
    var _a, _b, _c;
    // check for query parameter
    var fileName = (_a = req.query.file_name) !== null && _a !== void 0 ? _a : '';
    var widthStr = (_b = req.query.width) !== null && _b !== void 0 ? _b : NaN;
    var heightStr = (_c = req.query.height) !== null && _c !== void 0 ? _c : NaN;
    var width;
    var height;
    if (widthStr !== '') {
    }
    // send 400 status if at least 'file_name' param
    // was not provided
    if (fileName === '') {
        res.status(400).send('Must provide "file_name" value in query');
        return;
    }
    // get file path of full image sized image
    var originalFilePath = (0, get_image_path_1.default)(fileName);
    // check if image with filename exist
    var imageExists = (0, does_file_exist_1.default)(originalFilePath);
    // send 404 and message if image does not exist
    if (!imageExists) {
        res.send(404).send("Oops! Image file with name \"".concat(fileName, "\" does not exist yet."));
        return;
    }
    // serve full sized image if width and height params weren't provided
    // check if exist
    // get image file if exist or created otherwise
    res.status(500).send('images route');
});
exports.default = images;
