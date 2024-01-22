"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_absolute_image_path_1 = __importDefault(require("../../lib/get-absolute-image-path"));
describe('tests for getAbsoluteImagePath', function () {
    var correctPath = __dirname;
    it("should return ".concat(correctPath), function () {
        var answer = (0, get_absolute_image_path_1.default)(__dirname, '');
        expect(answer).toBe(correctPath);
    });
});
