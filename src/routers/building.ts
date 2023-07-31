import express from 'express';
import newData from '../controllers/building/create';
import getdata from '../controllers/building/getdata';
import newDataupgrade from '../controllers/building/createUpgrade';
const router = express.Router();
router.post("/create", newData)
router.post("/createUpgrade", newDataupgrade)
router.get("/:building_id/:frequency", getdata)

export default router;
