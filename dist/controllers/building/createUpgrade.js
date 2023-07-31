"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prediction_1 = __importDefault(require("../../models/prediction"));
const newData = async (req, res) => {
    const errors = [];
    let insertedCount = 0;
    try {
        for (let index = 0; index < req.body.allData.length; index++) {
            const doc = req.body.allData[index];
            try {
                await prediction_1.default.create(doc);
                insertedCount++;
            }
            catch (err) {
                errors.push({
                    index,
                    message: err instanceof Error ? err.message : "unknown error",
                    doc
                });
            }
        }
        const response = `${insertedCount} document(s) successfully inserted.`;
        return res.send({
            response,
            errors
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.send({
                response: "",
                errors: [{
                        index: -1,
                        message: err.message,
                        doc: req.body.allData[0]
                    }]
            });
        }
        else {
            res.send({
                response: "",
                errors: [{
                        index: -1,
                        message: "unknown error",
                        doc: req.body.allData[0]
                    }]
            });
        }
    }
};
exports.default = newData;
