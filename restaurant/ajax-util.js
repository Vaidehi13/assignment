(function(global){
	//Set namespace for further use
	var ajaxUtils = {};
	//Returns an HTTP request object
	function getRequestObject(){
		if(window.XMLHttpRequest){
			//if requested data to the server from XMLhttprequest exists then only create its object
			return(new XMLHttpRequest());
		}
		//for old browser versions
		else{
			global.alert("Ajax not supported");
			return(null);
		}
	}
	//Make an Ajax GET request to 'requestUrl'
	ajaxUtils.sendGetRequest = function(requestUrl,responseHandler){
		var request = getRequestObject();//get the request object
		request.onreadystatechange = function (){
			handleResponse(request,responseHandler);//Once request object has got we need to handle i.e check if correct
		};
		request.open("GET",requestUrl,true);//To send request to server we use open function
		request.send(null);//for POST only
	};
	//If response is ready & not an error
	function handleResponse(request,responseHandler){
		if((request.readyState == 4) && (request.status) == 200){
			responseHandler(request);
		}
	}
	//expose utility to global scope
	window.ajaxUtils = ajaxUtils;
})(window);
