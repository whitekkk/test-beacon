
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var server = require('http').Server(app)
var request = require('request');

// point of gateways
var gateways = [
  {id: 'CStGG', x: 7, y: 8},
  {id: 'XK8mX', x: 8, y: 3},
  {id: 'hdx2d', x: 4, y: 8}
]
// all point of user
var allPoint = {}
var ob = {}

var json = {data: "nodata"}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


app.get('/testDatas', function (req, res, next) {
  res.send(json)
})

app.post('/newbeacon', function (req, res) {
    json = req.body;
    res.send('Add new Completed!');
});

app.post('/neweddystone', function (req, res) {
    json = req.body;
    res.send('Add new Completed!');
});


app.use(express.static('dist'))
  app.set('port', (process.env.PORT || 3012))
  server.listen(app.get('port'), function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env)
})
