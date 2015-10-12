
# partition-refinement-iterator

  Progressively refine partitions of a finite set.

  Think of it like a more generic binary search that will keep dividing a finite set until all numbers in it have been emitted.

## Example

```js
var iterator = require('partition-refinement-iterator');

var iterate = iterator(Number(process.argv[2]));

while (true) {
  var n = iterate();
  if (typeof n == 'undefined') break;
  console.log(n);
}
```

Output:

```bash
 ∴  partition-refinement-iterator : node example.js 1
0
 ∴  partition-refinement-iterator : node example.js 2
0
1
 ∴  partition-refinement-iterator : node example.js 3
0
1
2
 ∴  partition-refinement-iterator : node example.js 4
0
2
1
3
 ∴  partition-refinement-iterator : node example.js 5
0
2
1
3
4
 ∴  partition-refinement-iterator : node example.js 6
0
3
1
4
2
5
 ∴  partition-refinement-iterator : node example.js 7
0
3
1
5
2
4
6
 ∴  partition-refinement-iterator : node example.js 8
0
4
2
6
1
3
5
7
```

## Installation

```bash
$ npm install partition-refinement-iterator
```

## API

### iterator(length)

  Return a function that can be called `length` times to get the next index in the refinement process.

## License

  MIT

