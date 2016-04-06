var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastname = lastName;
  this.gender = "male"
};

var Superhero = function (firstName, lastName, powers) {
  /**
   * Person(firstName,lastName);
   * 以上的方式中，this为Window(全局)，所以需要手动指定this为Superhero
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
   * 在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承
   */
  Person.call(this, firstName, lastName);
  this.powers = powers;
}
//显式的指定继承原型
Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero("Clark", "Kent", ["flight", "heat-vision"]);
console.log(Object.create(Person.prototype));
console.log(superman instanceof Person);
console.log(superman);