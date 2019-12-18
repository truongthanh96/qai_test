module.exports = (app) => {
    app.get('/users/:userId', (req, res) => {
        res.send({
            "message": "Hello world"
        });
    });
}; 
