"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParameters;
(function (QueryParameters) {
    QueryParameters["fileName"] = "file_name";
    QueryParameters["width"] = "width";
    QueryParameters["height"] = "height";
})(QueryParameters || (QueryParameters = {}));
var ImagesQuery = /** @class */ (function () {
    function ImagesQuery(reqQuery) {
        this.fileName = reqQuery[QueryParameters.fileName];
        this.width = this._getValidNumberIfAny(reqQuery[QueryParameters.width]);
        this.height = this._getValidNumberIfAny(reqQuery[QueryParameters.height]);
    }
    ImagesQuery.prototype._getValidNumberIfAny = function (value) {
        var possibleNumber = parseInt(value !== null && value !== void 0 ? value : '');
        return (isNaN(possibleNumber)) ? undefined : possibleNumber;
    };
    ImagesQuery.prototype.hasFileName = function () {
        return (this.fileName || '').trim() != '';
    };
    ImagesQuery.prototype.hasWidthAndHeight = function () {
        return this.width != undefined
            && this.height != undefined;
    };
    return ImagesQuery;
}());
exports.default = ImagesQuery;
