"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var get_image_path_1 = __importDefault(require("../lib/get-image-path"));
var does_file_exist_1 = __importDefault(require("../lib/does-file-exist"));
var ImagesQuery_1 = __importDefault(require("../lib/ImagesQuery"));
var path_1 = __importDefault(require("path"));
var resize_image_1 = __importDefault(require("../lib/resize-image"));
var images = express_1.default.Router();
images.use('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getAbsoluteImagePath, imagesQuery, fileName, originalFilePath, originalImageExists, absolutePath, width, height, newFilePath, resizedImageExists, newFileAbsolutePath, success, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getAbsoluteImagePath = function (imagePath) {
                    return path_1.default.join(__dirname, '../..', imagePath);
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                imagesQuery = new ImagesQuery_1.default(req.query);
                // send 400 status if at least 'file_name' param
                // was not provided
                if (!imagesQuery.hasFileName()) {
                    res.status(400).send('400: Must provide "file_name" value in query');
                    return [2 /*return*/];
                }
                fileName = imagesQuery.fileName;
                originalFilePath = (0, get_image_path_1.default)(fileName);
                return [4 /*yield*/, (0, does_file_exist_1.default)(originalFilePath)];
            case 2:
                originalImageExists = _a.sent();
                // send 404 and message if image does not exist
                if (!originalImageExists) {
                    res
                        .status(404)
                        .send("404: Oops! Image file with name \"".concat(fileName, "\" does not exist yet."));
                    return [2 /*return*/];
                }
                // send 404 and message if height or width are invalid
                if (imagesQuery.didProvideInputWidthAndHeight()) {
                    // width is invalid 
                    if (!imagesQuery.didProvideValidInputWidth()) {
                        res.status(404).send("Invalid width provided \"".concat(imagesQuery.inputWidth, "\""));
                        return [2 /*return*/];
                    }
                    // height is invalid 
                    if (!imagesQuery.didProvideValidInputHeight()) {
                        res.status(404).send("Invalid height provided \"".concat(imagesQuery.inputHeight, "\""));
                        return [2 /*return*/];
                    }
                }
                // serve full sized image if width and height params weren't provided
                if (!imagesQuery.hasWidthAndHeight()) {
                    absolutePath = getAbsoluteImagePath(originalFilePath);
                    res.status(200).sendFile(absolutePath);
                    return [2 /*return*/];
                }
                width = imagesQuery.width;
                height = imagesQuery.height;
                newFilePath = (0, get_image_path_1.default)(fileName, {
                    width: width,
                    height: height,
                });
                return [4 /*yield*/, (0, does_file_exist_1.default)(newFilePath)];
            case 3:
                resizedImageExists = _a.sent();
                newFileAbsolutePath = getAbsoluteImagePath(newFilePath);
                // return image if exists
                if (resizedImageExists) {
                    res.status(200).sendFile(newFileAbsolutePath);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, resize_image_1.default)(originalFilePath, newFilePath, width, height)];
            case 4:
                success = _a.sent();
                if (!success) {
                    throw Error();
                }
                res.status(200).sendFile(newFileAbsolutePath);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                res.status(500).send('Internal error');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = images;
