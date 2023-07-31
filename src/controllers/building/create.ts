import { RequestHandler } from "express";
import prediction,{ Prediction } from "../../models/prediction";

interface RequestBody<T> {
    allData: T[]
}
interface ResponseBody {
    response: string
    error: string
}
const newData:RequestHandler<unknown,ResponseBody,RequestBody<Prediction>> =async (req, res) => {

    try {
        // console.log("start")
        const start = Date.now();
        // console.log(req.body.allData)
        const  data = await prediction.insertMany(req.body.allData);
        // console.log(data)

        const response = Date.now()-start;
        // console.log("finish")
        res.send({
            response: response.toString()+" ms",
            error:""
        })
    }
    catch (err:unknown) {
        if(err instanceof Error){
          res.send({
              response: "",
              error: err.message
          })
        }
        else{
            res.send({
                response: "",
                error: "unknown error"
            })
        }
  }
}




export default newData;
