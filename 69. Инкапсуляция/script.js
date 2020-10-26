'use strict';

//пример на функции-конструкторе

function User(name, age) {
  this.name = name;
  this.age = age;

  this.say = function () {
    console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
  };

  this.getAge = function() {
    return userAge; 
  };

  this.setAge = function(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log(`Недопустимое значение!`);
    }
  }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());

ivan.name = 'Alex';

ivan.say();



// пример на классах