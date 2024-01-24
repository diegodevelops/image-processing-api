"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParameters = void 0;
var QueryParameters;
(function (QueryParameters) {
    QueryParameters["fileName"] = "file_name";
    QueryParameters["width"] = "width";
    QueryParameters["height"] = "height";
})(QueryParameters || (exports.QueryParameters = QueryParameters = {}));
var ImagesQuery = /** @class */ (function () {
    function ImagesQuery(reqQuery) {
        this.fileName = reqQuery[QueryParameters.fileName];
        this.width = this._getValidNumberIfAny(reqQuery[QueryParameters.width]);
        this.height = this._getValidNumberIfAny(reqQuery[QueryParameters.height]);
        this.inputWidth = reqQuery[QueryParameters.width];
        this.inputHeight = reqQuery[QueryParameters.height];
    }
    ImagesQuery.prototype._isValidInput = function (value) {
        var possibleNumber = Number(value || '');
        return (isNaN(possibleNumber))
            ? false
            : (possibleNumber > 0);
    };
    ImagesQuery.prototype._getValidNumberIfAny = function (value) {
        if (this._isValidInput(value)) {
            return Number(value || '');
        }
        return;
    };
    ImagesQuery.prototype.hasFileName = function () {
        return (this.fileName || '').trim() != '';
    };
    ImagesQuery.prototype.hasWidthAndHeight = function () {
        return this.width != undefined && this.height != undefined;
    };
    ImagesQuery.prototype.didProvideInputWidthAndHeight = function () {
        return this.inputWidth != undefined && this.inputHeight != undefined;
    };
    ImagesQuery.prototype.didProvideInputWidth = function () {
        return this.inputWidth != undefined;
    };
    ImagesQuery.prototype.didProvideInputHeight = function () {
        return this.inputHeight != undefined;
    };
    ImagesQuery.prototype.didProvideValidInputWidth = function () {
        return this._isValidInput(this.inputWidth);
    };
    ImagesQuery.prototype.didProvideValidInputHeight = function () {
        return this._isValidInput(this.inputHeight);
    };
    return ImagesQuery;
}());
exports.default = ImagesQuery;
