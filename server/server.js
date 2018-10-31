const express = require('express')
const app = express()
const port = 7000

app.get('/', function(req, res) {
    res.sendFile(path.join('../index.html'));
});
app.listen(port, () => console.log(`App listening on port ${port}!`))