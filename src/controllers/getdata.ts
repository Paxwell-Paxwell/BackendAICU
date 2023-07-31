import { RequestHandler } from "express";

interface Data {
  name: string;
}

const getdata: RequestHandler<unknown,unknown,Data> = (req, res) => {
  req.body.name = "John Doe";
  res.send(req.body);
}

export default getdata;
