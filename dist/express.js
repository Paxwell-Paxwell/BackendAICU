"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const building_1 = __importDefault(require("./routers/building"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
async function startServer() {
    await mongoose_1.default.connect(process.env.DATABASE_URL || '');
    const PORT = Number(process.env.PORT || 3000);
    app.use((0, cors_1.default)());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use("/building", building_1.default);
    app.get('/', (req, res) => {
        res.send('<h1>Hello World</h1>');
    });
    //next()
    app.use((err, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        res.status(err.status ?? 500).send(`<h1>${err.message ?? 'มีข้อผิดพลาดเกิดขึ้น'}</h1>`);
    });
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}
startServer();
