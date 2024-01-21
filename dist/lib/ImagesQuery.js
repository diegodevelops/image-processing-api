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
        this.width = reqQuery[QueryParameters.width];
        this.height = reqQuery[QueryParameters.height];
    }
    ImagesQuery.prototype._hasProperValue = function (prop) {
        return (prop || '').trim() != '';
    };
    ImagesQuery.prototype.hasFileName = function () {
        return this._hasProperValue(this.fileName);
    };
    ImagesQuery.prototype.hasWidthAndHeight = function () {
        return this._hasProperValue(this.width)
            && this._hasProperValue(this.height);
    };
    return ImagesQuery;
}());
exports.default = ImagesQuery;
