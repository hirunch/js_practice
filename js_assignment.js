let text = "Hello ";
text += "world!";
console.log(text);

let x = 10;
x **= 5;
console.log(x);

//Left Shift Assignment Operator
x = 5; // 00000000000000000000000000000101
x <<= 2 // 00000000000000000000000000010100
console.log(x);


x = 5; //  00000000000000000000000000000101
x >>= 2; //  00000000000000000000000000000001
console.log(x);

//The Bitwise And operator (&=)
x = 7; // 0000111
x &= 3;// 0000011
      //  0000011
     //result = 3 (0000011)
console.log(x);

// The Bitwise OR operator (|=)
x = 7; // 0000111
x |= 3;// 0000011
      //  0000111
     // result = 7 (0000111)
console.log(x);


// The Bitwise XOR Operator (^=)
x = 7; // 0000111
x ^= 3;// 0000011
      //  0000100
     // result = 4 (0000100)
console.log(x);

// And Operator (&&)
x = 7; // first value is true second value assigned
x &&= 5;
console.log(x);

// OR Operator (||)
x = 0 // fist value is false second value assigned;
x ||= 4;
console.log(x);

// ?? operator
let b; // first value undefined second value assigned it
b ??= 5;
console.log(b);