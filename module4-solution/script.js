
var names = ["John", "Vivek", "Janhvi", "Simran",  "Ajay"];
var letter,compare,i,lower;
for(i=0;i<names.length;i++)
{
    lower = names[i].toLowerCase();	
	letter = lower.charAt(0);
    compare = letter.localeCompare("j");
    if(compare == 0)
    {
	  goodbyeSpeaker.sayGoodBye(names[i]);
    }
    else
    {
	  helloSpeaker.sayHello(names[i]);
    }
}
