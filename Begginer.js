// reversing an array

function reverseArray(a) {
    let output = [];
    for (let i = a.length - 1; i >= 0; i--) {
      output.push(a[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(a) {
    for (let i = 0; i < Math.floor(a.length / 2); i++) {
      let old = a[i];
      a[i] = a[a.length - 1 - i];
      a[a.length - 1 - i] = old;
    }
    return a;
  }
  
  console.log(reverseArray(["Cat", "In", "The", "Hat"]));
  // [ 'Hat', 'The', 'In', 'Cat' 