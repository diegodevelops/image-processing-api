"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_image_path_1 = __importDefault(require("../../lib/get-image-path"));
describe('tests for getImagePath', function () {
    var fileName = 'japan.png';
    var correctFilePath = 'assets/full/japan.jpg';
    it("should return '".concat(correctFilePath, "' from '").concat(fileName, "'"), function () {
        var resultStr = (0, get_image_path_1.default)(fileName);
        expect(resultStr).toBe(correctFilePath);
    });
});
