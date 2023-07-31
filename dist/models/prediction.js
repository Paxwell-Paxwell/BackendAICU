"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const predictionSchema = new mongoose_1.Schema({
    building_id: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    frequency: {
        type: String,
        enum: {
            values: ["hourly", "daily"],
            message: "frequency must be hourly or daily"
        },
        required: true,
    },
    energy: {
        type: Number,
        required: true,
    },
    peakPower: {
        type: Number,
        required: true,
    },
}, { strict: "throw" });
exports.default = (0, mongoose_1.model)("Prediction", predictionSchema);
