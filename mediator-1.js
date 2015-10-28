var mediator = (function() {
	var topics = {};
	var subscribe = function(topic, fn) {
		if (!topics[topic]) {
			topics[topic] = [];
		}
		topics[topic].push({
			context: this,
			callback: fn
		});
		//console.log(topics)
		return this;
	}
	var publish = function(topic) {
		var args;
		if (!topics[topic]) {
			return false;
		}
		args=Array.prototype.slice.call(arguments,1);
		for (var i = 0, l = topics[topic].length; i < l; i++){

			var subscription=topics[topic][i];
			subscription.callback.apply(subscription.context,args);
		}
		return this;
	}
	return {
		Publish:publish,
		Subscribe:subscribe,
		installTo:function(obj){
			obj.subscribe=subscribe;
			obj.publish=publish;
		}
	}
})();
var wife={};
mediator.installTo(wife);
wife.subscribe("/test/event",function(data){
			console.log(subscription);
	console.log(data);
});
wife.publish("/test/event","chuanfeng");