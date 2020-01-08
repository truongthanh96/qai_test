app.get('/users/:userId', function (req, res) {
    res.send({
        "message": "Hello world"
    });
});