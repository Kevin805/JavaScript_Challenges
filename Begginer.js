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

// Cheesboard

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

