app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Daru ze smaru'; 
	$scope.promo = 'promo daru';
	$scope.products = 
		[ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Suche majtki na dnie mo¿a', 
    price: 85.98, 
    pubdate: new Date('2015', '03', '04'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Brzeczyœc', 
    price: 8.98, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  } 
]
	$scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	}
	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	}
}]);