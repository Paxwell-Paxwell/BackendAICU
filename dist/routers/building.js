"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = __importDefault(require("../controllers/building/create"));
const getdata_1 = __importDefault(require("../controllers/building/getdata"));
const createUpgrade_1 = __importDefault(require("../controllers/building/createUpgrade"));
const router = express_1.default.Router();
router.post("/create", create_1.default);
router.post("/createUpgrade", createUpgrade_1.default);
router.get("/:building_id/:frequency", getdata_1.default);
exports.default = router;
