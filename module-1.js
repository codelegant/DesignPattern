var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return ++counter;
    },
    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  }
})();
// 增加计数器
console.log(testModule.incrementCounter());

// 检查计数器并重置
testModule.resetCounter();

var otherModule = function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return ++counter;
    },
    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  }
};
// 创建计数器
var count = otherModule();
// 增加计数器
console.log(count.incrementCounter());
count.resetCounter();