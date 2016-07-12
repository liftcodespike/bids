var mongoose = require('mongoose');

var User = mongoose.model('User')

var Product = mongoose.model('Product')

module.exports= (function(){

	return{
		special: function(req, res){
			var prod1 = new Product({

					"name" : "product 1",
					"bids" : [],
					"status" : "open",
					"ended_by" : null,
			
			})
			var prod2 = new Product({

					"name" : "product 2",
					"bids" : [],
					"status" : "open",
					"ended_by" : null,

			})
			var prod3 = new Product({
					"name" : "product 3",
					"bids" : [],
					"status" : "open",
					"ended_by" : null,
				
			})
			prod1.save(function(err){
				prod2.save(function(err){
					prod3.save(function(err){

					})
				})
			})
		},

		getStatus: function(req, res){
			Product.findOne({}, function(err, product){

				if(product.status=='closed'){
					res.json({status:'closed'})
				}else{

					res.json({status: 'open'})
				}
			})
		}, 

		getProducts: function(req, res){


			Product.find({}, function(err, results){

				if(err){
					console.log(err)
				}else{

					res.json(results)
				}

			})

		
		}, 

		startBid: function(req, res){


			Product.update({}, {status: 'open', ended_by: 'hi' , bids:[]},{multi: true}, function(err){




				if(err){

					console.log(err)
				}
			})

			res.json({status:true})
		}, 

		newBid: function(req, res){


			req.body.user = req.session.user.name
			Product.findOne({_id:req.body._id}, function(err, product){

				if(err){
					console.log(err)
				}else{

					var bid = {name: req.body.user, bid: req.body.bid}

					product.bids.push(bid)

					console.log(product)

					product.save(function(err){

						if(err){
							console.log(err)
						}else{

							res.json({status:true})
						}
					})
				}
			})
		}, 


		endBid: function(req, res){
			name = req.session.user.name

			Product.update({}, {status: 'closed', ended_by: req.session.user.name},{multi: true}, function(err){


				if(err){

					console.log(err)
				}else{





				Product.update({}, {ended_by: name},{multi: true}, function(err){


						if(err){

							console.log(err)
						}else{
								res.json('true')

						}

					})










				}
			})
		}
	}

})()