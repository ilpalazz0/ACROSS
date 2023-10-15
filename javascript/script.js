let a = prompt("Enter your name: ");
let d = prompt("Enter your grade: ");
let b = parseInt(d);
let c = "null";

alert(`Hello, ${a}`);


    if(b < 59.5)
        c = "F"; else 
    if(b < 69.5)
        c = "D"; else
    if(b < 79.5)
        c = "C"; else
    if(b < 89.5)
        c = "B"; else
    if(b < 100)
        c = "A"; else
        c = "A++++++++++++";

alert(`Your grade is ${c}`);
