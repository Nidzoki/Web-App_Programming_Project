const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const body_parser = require("body-parser");
app.use(body_parser.json());


app.get("/", (req, res) =>
  res.send("Server za Projektni zadatak")
);

const podaci = [
  {
    "username":"Ante",
    "password":"1234"
  },
  {
    "username":"Mario",
    "password":"mario123"
  },
  {
    "username":"Mirko",
    "password":"mirkolegenda404"
  },
  {
    "username":"Jure",
    "password":"jukabazuka"
  },
  {
    "username":"Šime",
    "password":"šimegoat"
  },
  {
    "username":"Pero",
    "password":"jasamsamojavascriptobject" // opet Pero sa svojim teorijama zavjere
  }

];


// POST

app.post("/provjera", async (req, res) => {
  
  console.log(req.body);
  var found = false;
  for(let i = 0; i < podaci.length; i++){
    if(podaci[i].username == req.body.username && podaci[i].password === req.body.password) {
      res.status(200).send(req.body);
      found = true;
      break;
    }
  }
  
  if(!found)
    res.status(404).send("Not OK");
});




app.listen(4000, () => console.log("Server sluša port 4000!"));

