var mailCounter=0;

var subscriber1=subscribe("inbox/newMessage",function(topic,data){
	console.log("A new message was received: ",topic);
});

var subscriberl2=subscribe("inbox/newMessage",function(topic,data){
	
});