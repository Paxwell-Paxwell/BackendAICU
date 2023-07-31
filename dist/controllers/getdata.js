"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getdata = (req, res) => {
    req.body.name = "John Doe";
    res.send(req.body);
};
exports.default = getdata;
