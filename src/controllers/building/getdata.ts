import { RequestHandler } from "express";
import prediction,{ Prediction } from "../../models/prediction";


interface ResponseBody<T> {
    response: string
    data:T[]
    error: string
}
interface paramtype{
    building_id:string,
    frequency:"hourly"|"daily"
}
export const getdata:RequestHandler<paramtype,ResponseBody<Prediction>> =async (req, res) => {
    const {building_id,frequency} = req.params;
    try {
        // console.log("start")
        const start = Date.now();
        const arr = await prediction.find({building_id:building_id,frequency:frequency}).sort({date:"asc"});
        const response = Date.now()-start;
        // console.log("finish")
        res.send({
            response: response.toString(),
            data:arr,
            error:""
        })
    }
    catch (err:unknown) {
        if(err instanceof Error){
          res.send({
              response: "",
              data:[],
              error: err.message
          })
        }
        else{
            res.send({
                response: "",
                data:[],
                error: "unknown error"
            })
        }
  }

}



export default getdata;
