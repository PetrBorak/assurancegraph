require(["jquery","angularjs",/*"angularroute","jquerymobile","resource",*/"directives","controllers","services"],function(){
  
	/*
  $.mobile.ajaxEnabled = false;
  $.mobile.linkBindingEnabled = false; 
  $.mobile.hashListeningEnabled = false; 
  $.mobile.pushStateEnabled = false; 
  $.mobile.changePage.defaults.changeHash = false;
  */ 
   
angular.module('myApp',['services','controllers','directives']);
angular.bootstrap(document,['myApp']);
})