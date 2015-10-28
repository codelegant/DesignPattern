/*发布订阅模式的javascript实现*/
var pubsub = {};
(function(q) {
	var topics = {},
		subUid = -1;

	/*相当于$.trigger()*/
	q.publish = function(topic, args) {
		if (!topics[topic]) {
			return false;
		}
		var subscribers = topics[topic],
			len = subscribers ? subscribers.length : 0;
		while (len--) {
			subscribers[len].func(topic, args);
		}

		return this;
	};

	/*相当于$.on()*/
	q.subscribe = function(topic, func) {
		if (!topics[topic]) {
			topics[topic] = [];
		}

		var token = (++subUid).toString();
		topics[topic].push({
			token: token,
			func: func
		});
		return token;
	}
	/*相当于$.off()*/
	q.unsubscribe = function(token) {
		for (var m in topics) {
			if (topics[m]) {
				for (var i = 0, j = topics[m].length; i < j; i++) {
					topics[m].splice(i, 1);
					return token;
				}
			}
		}
		return this;
	}
})(pubsub);


/*消息处理程序*/
var messageLogger = function(event, data) {
	//console.log('Logging: ' + event + ": " + data);
}
pubsub.subscribe("inbox/newMessage", messageLogger);

pubsub.publish("inbox/newMessage", "Hello world");
pubsub.publish("inbox/newMessage", ["a", "b", "c", "d"]);

/*用户界面通知*/
var grid={
	getCurrentTime:function(){
			var date = new Date,
		m = date.getMonth() + 1,
		d = date.getDate(),
		y = date.getFullYear(),
		t = date.toLocaleTimeString().toLowerCase();
	return (m + "/" + d + "/" + y + " " + t);
	},
	addGridRow:function(data){
		console.log("updated grid component with:" + data.summary);
	},
	updateCounter:function(data){
		console.log("data last update at: " + this.getCurrentTime() + " with" + data.summary);
	}
}

pubsub.subscribe("newDtatAvailable", function(topics,data){
	if(data !=="undefined"){
		grid.addGridRow(data);
		grid.updateCounter(data);
	}
});

pubsub.publish("newDtatAvailable",{
	summary:"Apple made $5 billion",
	indentifier:"APPL",
	stockPrice:678.98
});