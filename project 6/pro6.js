"use strict";
//----------------------PROJECT 6 --------------------------------------
//Stripping Names: Store a person’s name, 
//and include some whitespace characters at the beginning
// and end of the name. 
//Make sure you use each character combination,
// "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let myName = "\t  Mehreen   \n";
//white space
console.log(" with white space", myName);
//striping white space
let stripName = myName.trim(); // .trim() use to end white spacecs
console.log(stripName);
