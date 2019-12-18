var Router = require('koa-router');
module.exports = function(app) {
	var router = new Router();
	router.get('/user/:userid', function *() {
		this.body = {
			message: "Hello world"
		};
	});
};
