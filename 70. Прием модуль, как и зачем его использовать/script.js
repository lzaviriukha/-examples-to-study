'use strict';

const app = '123';

const number = 1;

(function(){
  let number = 2;
  console.log(number);
  console.log(number + 3);
}()); // анонимная самовызывающаяся функция как модуль

console.log(number);

const user = (function (){ //Создание объектного интерфейса 
  const privat = function() {
    console.log('I am privat!');
  };

  return {
    sayHello: privat
  };
}());

user.sayHello();