myApp.factory('productFactory', function($http, $location){
	var factory = {};

	// factory.getStatus = function(){
	// 	$http.get('/getStatus').success(function(output){
	// 		if(output.status=='closed'){
	// 			$location.url('/results')
	// 		}else{
	// 			$location.url('/bids')
	// 		}
	// 	})
	// }


	factory.getProducts = function(callback){
		$http.get('/getproducts').success(function(output){

			callback(output)
		})


		
	}


	factory.startBid = function(){


		$http.get('/startbid').success(function(output){

			if(output.status==true){

				$location.url('/bids')
			}
		})
	}

	factory.addBid = function(newBid, id, calback){

		var data =  {bid:  newBid, _id: id}

		$http.post('/newbid', data).success(function(output){

			console.log('added')

		})


	}


	factory.endBid = function(){


		$http.get('endBid').success(function(output){
			
		})
	}

	
	return factory

})