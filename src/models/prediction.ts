import { Schema,model } from "mongoose";
export interface Prediction {
    building_id: string,
    date: number,
    frequency :"hourly"|"daily";
    energy: number,
    peakPower: number,
}
const predictionSchema = new Schema<Prediction>({
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
},{ strict: "throw"})

export default model<Prediction>("Prediction", predictionSchema);
