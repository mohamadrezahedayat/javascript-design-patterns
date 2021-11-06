const Rectangle = require('./Rectangle');
const Square = require('./Square');

console.log('rectangle');
const rc = new Rectangle(5, 6);
console.log(rc.toString());
console.log(rc.area);

console.log('square');
const sq = new Square(5);
sq.width = 6;
// ! it will be wrong answer
console.log(sq.toString());
console.log(sq.area);
