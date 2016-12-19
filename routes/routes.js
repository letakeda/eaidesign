module.exports = function(app) {
	app.get('/', function(req, res) {
  		res.render("index");
	});

	app.get('/api_template', function(req, res) {
  		res.render("api_template");
	});
}