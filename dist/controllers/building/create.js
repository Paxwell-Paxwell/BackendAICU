"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prediction_1 = __importDefault(require("../../models/prediction"));
const newData = async (req, res) => {
    try {
        // console.log("start")
        const start = Date.now();
        // console.log(req.body.allData)
        const data = await prediction_1.default.insertMany(req.body.allData);
        // console.log(data)
        const response = Date.now() - start;
        // console.log("finish")
        res.send({
            response: response.toString() + " ms",
            error: ""
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.send({
                response: "",
                error: err.message
            });
        }
        else {
            res.send({
                response: "",
                error: "unknown error"
            });
        }
    }
};
exports.default = newData;
