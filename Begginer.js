//  Find the minimum //

function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(0, 10));
  // 0


// Reversing an array //

function reverseArray(a) {
    let output = [];
    for (let i = a.length - 1; i >= 0; i--) {
      output.push(a[i]);
    }
    return output;
  }
  
  console.log(reverseArray(["Cat", "In", "The", "Hat"]));
  // [ 'Hat', 'The', 'In', 'Cat' 

// Cheesboard //

let boardSize = 10;

let board = "";

for (let y = 0; y < boardSize; y++) {
  for (let x = 0; x < boardSize; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
/* # # # # #
  # # # # # 
 # # # # #
  # # # # # 
 # # # # #
  # # # # # 
 # # # # #
  # # # # # 
 # # # # #
  # # # # # 
*/

// Flattening //

let arrays = [[1, 3, 5], [7, 9], [11]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// [ 1, 3, 5, 7, 9, 11]

// Higher-Order Functions //

// Looping //

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(5, n => n > 0, n => n - 1, console.log);
// → 5
// → 4
// → 3
// → 2
// → 1