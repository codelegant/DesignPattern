
var Car=function(setting){
	this.model=settings.model||"no model provided";
	this.color=settings.color||"no colour privided";
};

/*Mixin*/
var Mixin=function(){}

Mixin.prototype={
	driveForward:function(){
		console.log("drive forward");
	},
	driveBackward:function(){
		console.log("drive backward");
	},
	driveSideways:function(){
		console.log("drive sideways");
	}
}
function augment(receivingClass,givingClass){
	if(arguments[2]){
		for(var i=2,len=arguments.length;i<len;i++){
			receivingclass.prototype[arguments[i]]=givingClass.prototype[arguments[i]];
		}
	}else{
		for(var methodName in givingClass.prototype){
			if(!Object.hasOwnProperty.call(receivingclass.prototype,methodName)){
				receivingClass.prototype[methodName]=givingClass.prototype[methodName];
			}
		}
	}
}

augment(car,Mixin,"driveForward","driveBackward")