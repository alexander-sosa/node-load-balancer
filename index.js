var express = require("express")
var bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
var ip = require("ip")

var app = express();

app.listen(80, () => {
    console.log("Server running....")
    //console.log(ip.address());
});

app.get("/", (req, res, next) =>{
    res.json("{'message': 'Working...'}");
})

app.get("/hello", jsonParser, (req, res, next) => {
    const name = req.query.name;
    res.json("{'greeting': 'hello " + name + "', 'host-ip': '"+ ip.address() +"'}");
});