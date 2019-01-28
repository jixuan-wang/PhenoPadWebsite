const express = require('express')
const app = express()
const port = 80
const path = '/home/hnakxr/PhenoPadWebsite/'

app.use(express.static(__dirname ))
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/device-mockups'))
app.use(express.static(__dirname + '/vendor'))

app.get('/', function(req, res) {
    res.send(__dirname+'/index.html')
});
app.get("/m", function(req, res) {
    res.sendFile(__dirname+'/manual.html')
});
app.listen(port, () => console.log(`App listening on port ${port}!`))
