/*
 * 这段代码 本意是想证实new Function中的变量引用查找的作用域为全局作用域
 * ！！！！它在浏览器环境和node环境中的运行结果是不一样的
 * 1.浏览器中最外层声明的变量会成为window对象的属性，全局作用域可以视同window，
 *
 * 2. 如果使用node运行这个js文件的话，会报错ReferenceError: value is not defined，
 * 这是因为即使node的全局作用域对应的对象为global,即使你在文件最外层声明了变量，如果使用了var let const等关键字的话,变量依然为局部变量，
 * 所以在node环境下运行时仍然会报错引用错误
 */

//  针对浏览器
var value = 2;

//针对node环境
// global.value = 3;

function getFunc() {
  var value = "test";

  var func = new Function("console.log(value)");

  return func;
}

getFunc()();
