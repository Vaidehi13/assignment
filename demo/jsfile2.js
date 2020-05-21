document.addEventListener("DOMContentLoaded",function(event){//Execute only when complete browser is loaded
	//Unobstructive event binding
	document.querySelector("button").addEventListener("click",function(){
		var self = this;
		var name = " ";//Initially empty
		//call server to get name
		ajaxUtils.sendGetRequest ("name.txt",function(request){//requesturl,responseHandler to handle the obtained request
			self.name = request.responseText;//response.Text holds reponse recieved from server
			console.log(self.name);
			//Print hello
			document.querySelector("#content").innerHTML = "<h2>Hello" + self.name + "!</h2>";

		})
	})
});
