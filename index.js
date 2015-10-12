module.exports = function(length){
  if (typeof length == 'undefined') throw new Error('length required');

  var next = [];
  var emitted = [];
  var divisor = 2;
  var done = false;

  return function(){
    if (!next.length && !done) {
      var seg = length / divisor;
      for (var i = 0; i < divisor; i++) {
        var val = Math.floor(seg * i);
        if (emitted.indexOf(val) > -1) continue;
        next.push(val);
        emitted.push(val);
      }
      if (divisor >= length && seg < 1) done = true;
      else divisor *= 2;
    }

    var i = next.shift();
    return i;
  };
};

