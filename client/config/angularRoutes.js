var libraryApp = angular.module('libraryApp', ['ui.router']);

libraryApp.config(function($stateProvider, $urlRouterProvider, $qProvider){
	$qProvider.errorOnUnhandledRejections(false);
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})
		.state('adminLogin', {
			url: '/adminLogin',
			templateUrl: 'views/adminLogin.html'
		});
		
});