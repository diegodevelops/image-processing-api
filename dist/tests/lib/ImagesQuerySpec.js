"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ImagesQuery_1 = __importDefault(require("../../lib/ImagesQuery"));
describe('tests for ImageQuery class', function () {
    describe('tests for .hasFileName', function () {
        it('no parameter should return false', function () {
            var query = {};
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasFileName();
            expect(answer).toBeFalse();
        });
        it('empty string should return false', function () {
            var query = { file_name: '' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasFileName();
            expect(answer).toBeFalse();
        });
        it('spaces should return false', function () {
            var query = { file_name: '  ' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasFileName();
            expect(answer).toBeFalse();
        });
        it('"puertorico" should return true', function () {
            var query = { file_name: 'puertorico' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasFileName();
            expect(answer).toBeTrue();
        });
    });
});
