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
    describe('tests for .hasWidthAndHeight', function () {
        it('no parameters should return false', function () {
            var query = {};
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasWidthAndHeight();
            expect(answer).toBeFalse();
        });
        it('empty strings should return false', function () {
            var query = { width: '', height: '' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasWidthAndHeight();
            expect(answer).toBeFalse();
        });
        it('width of 200 and no height should return false', function () {
            var query = { width: '200' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasWidthAndHeight();
            expect(answer).toBeFalse();
        });
        it('height of 200 and no width should return false', function () {
            var query = { height: '200' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasWidthAndHeight();
            expect(answer).toBeFalse();
        });
        it('height and width of 200 should return true', function () {
            var query = { width: '200', height: '200' };
            var iq = new ImagesQuery_1.default(query);
            var answer = iq.hasWidthAndHeight();
            expect(answer).toBeTrue();
        });
    });
});
