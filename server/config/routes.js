var users = require('./../controllers/users.js');
var products = require('./../controllers/products.js')


module.exports = function(app){
	app.get('/special_create_route', function(req,res){
		products.special(req, res);
	})

	app.post('/user/create', function(req, res){
		users.create(req, res)
	})

	app.post('/user/login', function(req, res){
		users.login(req, res)
	})

	app.get('/session', function(req, res){
		users.check(req, res)
	})


	app.get('/logout', function(req, res){

		users.logout(req, res)
	})




	//product routes*************


	app.get('/getStatus', function(req, res){

		products.getStatus(req, res)
	})

	app.get('/getproducts', function(req, res){

		products.getProducts(req, res)
	})

	app.get('/startbid', function(req, res){

		products.startBid(req, res)
	})

	app.post('/newbid', function(req, res){


		products.newBid(req, res)
	})

	app.get('/endbid', function(req, res){


		products.endBid(req, res)
	})

	
}