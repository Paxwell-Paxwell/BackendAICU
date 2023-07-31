import { RequestHandler } from "express";
import prediction, { Prediction } from "../../models/prediction";
import { Document } from "mongoose";

interface RequestBody<T> {
    allData: T[]
}
interface ResponseBody {
    response: string
    errors: Array<{index: number, message: string, doc: Prediction}>
}
const newData:RequestHandler<unknown,ResponseBody,RequestBody<Prediction>> =async (req, res) => {

    const errors: Array<{index: number, message: string, doc: Prediction}> = [];
    let insertedCount = 0;

    try{
    for (let index = 0; index < req.body.allData.length; index++) {
        const doc = req.body.allData[index];
        try {
            await prediction.create(doc);
            insertedCount++;
        } catch (err:unknown) {
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
  catch (err:unknown) {
    if(err instanceof Error){
      res.send({
          response: "",
          errors: [{
              index: -1,
              message: err.message,
              doc: req.body.allData[0]
          }]
      })
    }
    else{
        res.send({
            response: "",
            errors: [{
                index: -1,
                message: "unknown error",
                doc: req.body.allData[0]
            }]
        })
    }
}
}



export default newData;
