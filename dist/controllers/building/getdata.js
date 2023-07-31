"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdata = void 0;
const prediction_1 = __importDefault(require("../../models/prediction"));
const getdata = async (req, res) => {
    const { building_id, frequency } = req.params;
    try {
        // console.log("start")
        const start = Date.now();
        const arr = await prediction_1.default.find({ building_id: building_id, frequency: frequency }).sort({ date: "asc" });
        const response = Date.now() - start;
        // console.log("finish")
        res.send({
            response: response.toString(),
            data: arr,
            error: ""
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.send({
                response: "",
                data: [],
                error: err.message
            });
        }
        else {
            res.send({
                response: "",
                data: [],
                error: "unknown error"
            });
        }
    }
};
exports.getdata = getdata;
exports.default = exports.getdata;
