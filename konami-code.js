var masterKey=[38,38,40,40,37,39,37,39,66,65];
var controllerCode=[];
				
window.onkeyup = function(evt) {
	evt = evt || window.event;

	var code=evt.keyCode?evt.keyCode:evt.which;
	if(masterKey[controllerCode.length]===code){
		controllerCode.push(code);
		document.getElementById("codeletter_"+controllerCode.length).className +=" white";
		
	}else {
		for(var i=controllerCode.length;i>0;i--){
			document.getElementById("codeletter_"+i).className="letter";
		}
		controllerCode=[];
	}
	if(controllerCode.length===10){
		flash(false,20);
		for(var i=10;i>0;i--){
			document.getElementById("codeletter_"+i).className="letter";
		}
		controllerCode=[];
	}
	function flash(white,numflash){
		for(var i=10;i>0;i--){
			document.getElementById("codeletter_"+i).className=(white?"letter white":"letter");
		}
		if(numflash>0){
			setTimeout(function() { flash(!white,numflash-1); }, 500); 
		}
	}
}
