var test = require('tape');
var iterator = require('./');

test(function(t){
  var it = iterator(10);
  t.equal(it(), 0);
  t.equal(it(), 5);
  t.equal(it(), 2);
  t.equal(it(), 7);
  t.equal(it(), 1);
  t.equal(it(), 3);
  t.equal(it(), 6);
  t.equal(it(), 8);
  t.equal(it(), 4);
  t.equal(it(), 9);
  t.end();
});

