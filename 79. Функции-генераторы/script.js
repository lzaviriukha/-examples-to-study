'use strict'

// 1

function* generator() {
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
}

const str = generator();

console.log(str.next());
console.log(str.next().value);


// 2

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// 3

function* gen(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of gen(7)) {
  console.log(k);
}