var defineProp = function (obj, key, value) {
  var config = {};
  config.value = value;
  // config.writable=true;
  /*默认为false，不可遍历*/
  config.enumerable = true;
  // config.configurable=true;
  Object.defineProperty(obj, key, config);
}
var person = Object.create(null);

defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1992");
person.firstName = "Mark";
defineProp(person, "hasBeard", false);
person.car = "BMW"
console.log(person);

// 输出Delorean
// console.log(person.car);

// 继承person的属性
var driver = Object.create(person);

defineProp(driver, "topSpeed", "100mph");

// console.log(driver.dateOfBirth);
// console.log(driver.topSpeed);
// console.log(driver.firstName);
 