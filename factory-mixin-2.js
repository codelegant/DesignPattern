
var Car=function(settings){
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
/**
 * 如果有额外参数，就将额外参数传递给第一个参数，
 * 否则将第二个参数的所有原型方法传递给第一个参数
 * @param  {[type]} receivingClass [要扩充原型的类]
 * @param  {[type]} givingClass    [用来做源的类]
 * @return {[type]}                [description]
 */
function augment(receivingClass,givingClass){
	if(arguments[2]){
		for(var i=2,len=arguments.length;i<len;i++){
			receivingClass.prototype[arguments[i]]=givingClass.prototype[arguments[i]];
		}
	}else{
		for(var methodName in givingClass.prototype){
			if(!Object.hasOwnProperty.call(receivingClass.prototype,methodName)){
				receivingClass.prototype[methodName]=givingClass.prototype[methodName];
			}
		}
	}
}

augment(Car,Mixin,"driveForward","driveBackward");
var myCar=new Car({
	model:"Forad Escort",
	color:"blue"
});

myCar.driveForward();