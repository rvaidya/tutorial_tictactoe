var express = require('express');
var fs = require('fs');

var app = express();

let array = null;
fs.readFile("color-data.json", 'utf8', (err, data) => array = JSON.parse(data));

app.get("/colors/:index", (req, res) => res.send(array[parseInt(req.params.index)]));

app.listen(3001);
