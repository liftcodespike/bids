myApp.controller('productController', function($scope, userFactory, $location, productFactory){

	$scope.currentUser;


	$scope.products;


	$scope.newBid;



	$scope.status;





	$scope.logout = function(){

		userFactory.logout()
	}


	
	userFactory.getUser(function(data){
		
		if(data.name == undefined){
			$location.url('/')

		}else{
			$scope.currentUser = data


		productFactory.getProducts(function(data){
		$scope.products = data

		if($scope.products[0]['status']== 'closed'){

			$location.url('/results')

		}else{

			$location.url('/bids')
		}
	})






		}
		
		})


	




	$scope.startBid = function(){

		productFactory.startBid()
	}

	$scope.addBid = function(id, newBid){

		if(newBid == undefined){


						alert('please enter a valid bid.')

						
					}else if(newBid <= 0){


						alert('please enter a valid bid.')



					}else{


					
						for(product in $scope.products){

							if($scope.products[product]['_id']== id){
								$scope.answer = false

								for(bid in $scope.products[product]['bids']){

									if(parseInt($scope.products[product]['bids'][bid]['bid']) >= newBid){

										$scope.answer = true
									}

								}


							}
						}



						if($scope.answer== true){


						alert('enter a bid that is higher then the last highest bid.')
						}else{



							productFactory.addBid(newBid, id)

							productFactory.getProducts(function(data){
									$scope.products = data

									if($scope.products[0]['status']== 'closed'){

										$location.url('/results')

									}else{

										$location.url('/bids')
									}
								})
						}


					}

					newBid = {}
					$location.url('/bids')


	}
	



	$scope.endBid = function(){
		$scope.allowed=  true 
			for(product in $scope.products){

				if($scope.products[product]['bids'].length <= 0){

					$scope.allowed = false
				}
				}


				if($scope.allowed==false){

					alert('cant end this bid. Not all products have bids.')
				}else{


					productFactory.endBid()

					$location.url('/results')





				}



	}





	
})