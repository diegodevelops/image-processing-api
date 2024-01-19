"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/images', function (req, res) {
    res.status(500).send('havent built resizing feature');
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
// for supertest
exports.default = app;
