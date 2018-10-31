const express = require('express')
const app = express()
const port = 7000
const path = '/home/hnakxr/PhenoPadWebsite/'
app.get('/', function(req, res) {
    res.sendFile(path+'/index.html');
});
app.listen(port, () => console.log(`App listening on port ${port}!`))