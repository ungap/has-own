require('../cjs');
test();

function test() {
  console.assert(Object.hasOwn({a: 1}, 'a'));
}
