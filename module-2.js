var myNamespace=(function(){

	// 私有计数器变量
	var myPrivateVar=0,

	//记录所有参数的私有方法
	myPrivateMethod=function(foo){
		console.log(foo);
	};
	/**/
	return {
		// 公有变量
		myPublicVar:"foo",

		//调用私有变量和方法的公有函数
		myPublicFunction:function(bar){

			//增加私有计数器值
			myPrivateVar++;

			//传入bar调用私有方法
			myPrivateMethod(bar);
		},
		getCount:function(){
			console.log(myPrivateVar);
		}
	}
})();

myNamespace.myPublicFunction("good");