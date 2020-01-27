const express = require('express'),
    path = require('path'),
    app = express(),
    HTTP_PORT = process.env.PORT || 8080;

app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(HTTP_PORT, () => {
    console.log('Express server on.');
})