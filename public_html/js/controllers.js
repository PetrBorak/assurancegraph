var controllers = angular.module("controllers",[]);

controllers.controller('calculation', ['$scope', function($scope){
			
			$scope.initiatecanvas = function(){
							$scope.canvas = document.createElement('canvas');
							$('#canvas').append($scope.canvas);
							$($scope.canvas).attr({'width': '211px', 'height':'117px'})
			}
			
			$scope.clearcanvas = function(){
							$scope.canvas.width = $scope.canvas.width;
			}
			
			$scope.canvasdrawdata = function(){
					
					var maxvalue = Math.max($scope.pc, $scope.sh, $scope.vpp, $scope.total);
					
					function drawchart(){
									var setofoptions = [];
									
									var pomerpc = $scope.pc / maxvalue;
									var vyskapc = pomerpc * 97;
									var imagebottomnullpc = 'img/pcchartbottomnull.png'
									var imagebottompc = 'img/pcchartbottom.png'
									var imagepc = 'img/pcchart.png'
									var pcczero = Math.floor(vyskapc) == 0 ? true : false;
									var pccleft = 0;
									
									setofoptions.push({
													name: 'pcc',
													zero: pcczero,
													imagebottomnull: imagebottomnullpc,
													imagebottom: imagebottompc,
													image: imagepc,
													left: pccleft,
													max: vyskapc
									});
									
									var pomersh = $scope.sh / maxvalue;
									var vyskash = pomersh * 97;
									var imagebottomnullsh = 'img/shchartbottomnull.png'
									var imagebottomsh = 'img/shchartbottom.png'
									var imagesh = 'img/shchart.png'
									var shzero = Math.floor(vyskash) == 0 ? true : false;
									var shleft = 56;
									
									setofoptions.push({
													name: 'sh',													
													zero: shzero,
													imagebottomnull: imagebottomnullsh,
													imagebottom: imagebottomsh,
													image: imagesh,
													left: shleft,
													max: vyskash
									});
									
									var pomervp = $scope.vpp / maxvalue;
									var vyskavp = pomervp * 97;
									var imagebottomnullvp = 'img/vpchartbottomnull.png'
									var imagebottomvp = 'img/vpchartbottom.png'
									var imagevp = 'img/vpchart.png'
									var vpzero = Math.floor(vyskavp) == 0 ? true : false;
									var vpleft = 110;			
									
									setofoptions.push({
													name: 'vp',													
													zero: vpzero,
													imagebottomnull: imagebottomnullvp,
													imagebottom: imagebottomvp,
													image: imagevp,
													left: vpleft,
													max: vyskavp
									});
									
									var pomerpp = $scope.total / maxvalue;
									var vyskapp = pomerpp * 97;
									var imagebottomnullpp = 'img/ppchartbottomnull.png'
									var imagebottompp = 'img/ppchartbottom.png'
									var imagepp = 'img/ppchart.png'
									var ppzero = Math.floor(vyskapp) == 0 ? true : false;
									var ppleft = 166;	
									
									setofoptions.push({
													name: 'pp',
													zero: ppzero,
													imagebottomnull: imagebottomnullpp,
													imagebottom: imagebottompp,
													image: imagepp,
													left: ppleft,
													max: vyskapp
									});									
									
										setofoptions.forEach(function(options){
														canvasdrawcolumn(options);
										})
					}
					
					function canvasdrawcolumn(options){
												$('#canvas .hidden').empty();
												var pcchartbottomnull = new Image();
												pcchartbottomnull.src = options.imagebottomnull;
												$(pcchartbottomnull).appendTo('#canvas .hidden');
												$(pcchartbottomnull).attr('id',options.name+'_bottom')
												
									var ctx = $scope.canvas.getContext('2d');
									
									if(options.zero){
																console.log('zero');
																var bottom = $('#'+options.name+'_bottom').get(0);
																var y = $('#canvas canvas').height() - 10;
																ctx.drawImage(bottom,options.left,y);
									} else {
																var pcchartbottom = new Image();
																pcchartbottom.src = options.imagebottom;
																$(pcchartbottom).bind('load',function(event){
																				var y = $('#canvas canvas').height() - 10;
																				ctx.drawImage(pcchartbottom,options.left,y);												
																});
																
																var pcchart = new Image();
																pcchart.src = options.image;
																$(pcchart).bind('load',function(event){
																				
																				for(var i=20; i < (options.max + 20); i++){
																							var y = $('#canvas canvas').height() - i;
																							ctx.drawImage(pcchart,options.left,y);			
																			}
																});
												};
					}
					
					drawchart();
					
					/*
					ctx.fillStyle = "#FF0000";
					ctx.fillRect(0,0,150,75);
					*/
			}
			
			$scope.initiatecanvas();
			$scope.reset = function(){
								$scope.pc = 10000;					
								$scope.sh = 15000;
								$scope.vpp = 7000;
								$scope.total = 4666;		
								$scope.podp = 'podpojištění';
								$scope.perct = 66.66;
								$scope.clearcanvas();
								$scope.canvasdrawdata();
			}
			
			$scope.reset();
			
}]);