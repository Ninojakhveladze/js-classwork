// დავალება 01

let i = 1;
let sum = 0;
while(i < 10) {  
    if (i % 2 != 0) { //კენტი რიცხვები 10 მდე
    sum = sum + i; // კენტი რიცხვების ჯამი
    }
    i = i + 1 // ეს პირობა აკლდა
}
console.log(sum);

// 2) კონსოლში დავბეჭდოთ 1დან 50მდე 3ის ჯერადი რიცხვების ჯამი, ციკლის გამოყენებით

let i = 1;
let sum = 0;
while(i < 50) {
    if (i % 3 == 0) { // 3-ის ჯერადი რიცხვები
        sum = sum + i; //3-ის ჯერადი რიცვების ჯამი
    }
    i = i + 1
}
console.log(sum);