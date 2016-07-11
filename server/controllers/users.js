var mongoose = require('mongoose');

var User = mongoose.model('User')
var Product = mongoose.model('Product')


module.exports= (function(){

	return{

		create: function(req, res){

			User.findOne({name: req.body.name}, function(err, user){

				if(err){

					res.json({status: false, message: 'error happened while saving no user. Please try again.'})
				}else if(user){

					res.json({status: false, message: 'User already exists.'})

				}else{

					var  user = new User(req.body)
					user.save(function(err, user){
						if(err){
							console.log(err)
							console.log(req.body)
							res.json({status: false, message: 'error happened while saving. Please try again.'})
						}else{

							res.json({status: true , message: 'User created.'})
						}

					})
				}

			})
		},


		login: function(req, res){

			User.findOne({name: req.body.name}, function(err, user){
				
				if(err){
					res.json({status: false, message: 'error happened while retreiving user.. Please try again.'})
				}else if(!user){
					res.json({status: false, message: 'check your user name and try again.'})
				}else{



					req.session.user = user

					res.json({status: true, user_status: user.status, user_name: user.name, user_id: user._id})
				}
			})

		},

		check: function(req, res){

			res.json(req.session.user)
		},

		logout: function(req, res){
			req.session.destroy()

			console.log('destroyed session')

			res.json({status:true})
		}

	}

})()