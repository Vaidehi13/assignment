(function(window){
var goodbyeSpeaker = {};
goodbyeSpeaker.speakword = "GoodBye"
goodbyeSpeaker.sayGoodBye = function(name)
{
	console.log(goodbyeSpeaker.speakword + " " + name);
}
window.goodbyeSpeaker = goodbyeSpeaker;
})(window);




