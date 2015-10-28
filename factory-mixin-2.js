/*瀹氫箟绠鍗曠殑Car鏋勯犲嚱鏁*/
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
/*閫氳繃涓涓柟娉曞皢鐜版湁鐨勫璞℃墿灞曞埌鍙﹀涓涓璞′笂*/
function augment(receivingClass,givingClass){
	if(arguments[2]){
		/*鍙彁渚涚壒瀹氱殑鏂规硶*/
		for(var i=2,len=arguments.length;i<len;i++){
			receivingclass.prototype[arguments[i]]=givingClass.prototype[arguments[i]];
		}
	}else{
		/*鎻愪緵鎵鏈夋柟娉*/
		for(var methodName in givingClass.prototype){
			/*纭繚鎺ユ敹绫讳笉鍖呭惈鎵澶勭悊鏂规硶鐨勫悓鍚嶅嚱鏁*/
			if(!Object.hasOwnProperty.call(receivingclass.prototype,methodName)){
				receivingClass.prototype[methodName]=givingClass.prototype[methodName];
			}
		}
	}
}

/*缁機ar鏋勯犲嚱鏁板鍔"driveForward"鍜"driveBackward"涓や釜鏂规硶*/
augment(car,Mixin,"driveForward","driveBackward")