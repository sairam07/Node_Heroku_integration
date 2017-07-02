var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Mandatory Auhtentication hit !');
		next();
	},
	logger: function (req, resp,next){
		var date = new Date().toString();
		console.log('Request :' +date + ': ' + req.method + '-->' + req.originalUrl);
		next();
	}
};

module.exports = middleware;