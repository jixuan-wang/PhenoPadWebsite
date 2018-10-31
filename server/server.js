const express = require('express')
const app = express()
const port = 7000
const path = '/home/hnakxr/PhenoPadWebsite/'


app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/vendor'));
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.send(__dirname+'/index.html');
});
app.listen(port, () => console.log(`App listening on port ${port}!`))