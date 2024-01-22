"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var remove_file_extension_1 = __importDefault(require("../../lib/remove-file-extension"));
describe('tests for removeFileExtension', function () {
    var string = 'puertorico.png';
    var correctString = 'puertorico';
    it("should convert ".concat(string, " to ").concat(correctString), function () {
        var newString = (0, remove_file_extension_1.default)(string);
        expect(newString).toBe(correctString);
    });
    var string2 = 'puertorico.sanjuan.png';
    var correctString2 = 'puertorico.sanjuan';
    it("should convert ".concat(string2, " to ").concat(correctString2), function () {
        var newString = (0, remove_file_extension_1.default)(string2);
        expect(newString).toBe(correctString2);
    });
});
