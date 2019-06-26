const assert = require('assert'),
		myFunction = require('./main.js');


it('Find most length used: should return true', () => {
  assert.equal(myFunction.findMostLength(['a', 'ab', 'abc', 'cd']), 2);
})


it('Find most length used: should return true', () => {
  assert.equal(myFunction.findMostLength([]), 0);
})


it('Find most length used: should return true', () => {
  assert.equal(myFunction.findMostLength('a'), null);
})



it('Sum top 2: should return true', () => {
  assert.equal(myFunction.top2sum([1,4,2,3,5]), 9);
})


it('Sum top 2: should return true', () => {
  assert.equal(myFunction.top2sum([]), 0);
})


it('Sum top 2: should return true', () => {
  assert.equal(myFunction.top2sum('a'), null);
})
