var directives = angular.module("directives",[]);

directives.directive('tabs', function(){
				function link(scope, element, attributes){
								console.log('test direktiv');
								$(element).bind('click', function(event){
											console.log('attributes test');
											console.log(attributes);
											var selector = attributes.tabs;
											$('.tabs li').removeClass('active');
											$(element).addClass('active');
											$('.tab-content > div').removeClass('active');
											$('.tab-content > div.'+selector).addClass('active');
								});
				}
				return {
								restrict: 'A',
								link: link
				}
})

directives.directive('count', function($rootScope){
			return {
							link: function(scope,element,attribute){
															
											var pojistnacastka = scope.pc;
											var skutecnahodnota = scope.sh;
											var vysepojistnehoplneni = scope.vpp;
											
											function random(type){
															$('.click').removeClass('active');
															$('.'+type).addClass('active');
															scope[type] = Math.round((Math.random() * scope[type])*100) / 100;
															
															calculate();
															scope.clearcanvas();
															scope.canvasdrawdata();
											}
											
											$rootScope.$on('random', function(event, data){
															console.log(data);
															random(data);
											});
											
											function calculate(scopeapply){
																
															pojistnacastka = scope.pc;
															skutecnahodnota = scope.sh;
															vysepojistnehoplneni = scope.vpp;
															
															pojistnacastka = scope.pc = pojistnacastka <= 0 ? 1 : pojistnacastka;
															skutecnahodnota = scope.sh = skutecnahodnota <= 0 ? 1 : skutecnahodnota;
															vysepojistnehoplneni = scope.vpp = vysepojistnehoplneni <= 1 ? 0 : vysepojistnehoplneni; 
															
															var pojistneplneni = (vysepojistnehoplneni * pojistnacastka)/skutecnahodnota;
															pojistneplneni = (pojistneplneni > vysepojistnehoplneni) ? vysepojistnehoplneni : pojistneplneni;
															scope.total = Math.round(pojistneplneni * 100) / 100;
															
															scope.podp = pojistneplneni >= vysepojistnehoplneni ? 'nadpojištění' : 'podpojištění';
															scope.perct = (pojistneplneni / vysepojistnehoplneni) * 100;
															scope.perct = Math.round(scope.perct*100)/100;
															
															if(scopeapply){
																			scope.$apply();
															}
															
											
											/*


											console.log('scope skutecna hodnota');
											console.log(skutecnahodnota);
											console.log('vy pojistneho plneni');
											console.log(vysepojistnehoplneni);
											console.log('scope pojistna castka');
											console.log(pojistnacastka);	
											console.log('total');
											console.log(scope.total);
											*/
										
											}
											
										 function upward(item){
												
											 scope[item] = scope[item] + 500;
															
												pojistnacastka = scope.pc;
												skutecnahodnota = scope.sh;
												vysepojistnehoplneni = scope.vpp;
												
												calculate(true);
												
											}
											
										 function downward(item){
												
											 scope[item] = scope[item] - 500;
															
												pojistnacastka = scope.pc;
												skutecnahodnota = scope.sh;
												vysepojistnehoplneni = scope.vpp;
												
												calculate(true);
												
											}											
											
											
											scope.change = function(){
															calculate();
															scope.clearcanvas();
															scope.canvasdrawdata();			
											}
											
											
											$(element).find('.clrr-upcarret').bind('click', function(event){
														upward(attribute.count);
														scope.clearcanvas();
														scope.canvasdrawdata();
											});
											
											$(element).find('.clrr-downcarret').bind('click', function(event){
														downward(attribute.count);
														scope.clearcanvas();
														scope.canvasdrawdata();
											});
							}
			}	
});