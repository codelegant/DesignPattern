var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastname = lastName;
	this.gender = "male"
};

var Superhero = function(firstName, lastName, powers) {
	/**
	 * Person(firstName,lastName);
	 * 不能用上面这种方式，而是要强制将this传入，否则无法继承Person中的成员
	 * 如果使用上面的那种方式，this是否改变？明天测试
	 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
	 */
	Person.call(this, firstName, lastName);
	this.powers = powers;
}
//显式的指定继承原型
Superhero.prototype=Object.create(Person.prototype);
var superman=new Superhero("Clark","Kent",["flight","heat-vision"]);
console.log(superman instanceof Person);
console.log(superman);