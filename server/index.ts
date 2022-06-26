const body = require("body-parser");
const express = require("express");
const cors = require("cors");

let Data = {
  processes: []
};

const app = express();
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(cors());

app.use("*", function (req:any, res:any,next:Function) {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

app.post("/data", function (req:any, res:any) {
  Data = req.body;
  res.json({ Success: true, Message: "Successfuly Posted Data" });
});

app.get("/data", function (req:any, res:any) {
  function clean(Input:any) {
    let Processes = Object.keys(Input.processes);
    let Final = JSON.parse(JSON.stringify(Input));
    Final.processes = [];
    console.log(Input.processes);
    Processes.forEach((element) => {
      Final.processes.push(JSON.parse(Input.processes[element]));
    });
    return Final;
  }
  res.json({ Success: true, Data: clean(Data) });
});

app.use("*", function (req:any, res:any) {
  res.json({ Success: false, Message: "Success!" });
});

app.listen(3000, function () {
  console.log(`http://127.0.0.1:3000`);
});
