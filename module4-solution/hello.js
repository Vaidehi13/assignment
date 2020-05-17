(function(window){
var helloSpeaker = {};
helloSpeaker.speakword = "Hello"
helloSpeaker.sayHello = function(name)
{
	console.log(helloSpeaker.speakword + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);




