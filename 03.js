//მიამატეთ თქვენს წინა მანქანების დავალებაში ფუნქცია
//1) რომელიც ითვლის და აბრუნებს რიცხვთა მასივის საშუალო არითმეტიკულს და მისი გამოყენებით დაბეჭდეთ თქვენი მანქანების საშუალო ფასი შემდეგნაირი მესიჯით :
//“Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : x” სადაც x რეალური რიცხვია.

let Audi = {
    mark: "აუდი",
	color: "თეთრი",
	model: "A4",
	year: "2019",
	power: "190",
	price: 20000
};

let BMW = {
    mark: "BMW",
	color: "ლურჯი",
	model: "A3",
	year: "2018",
	power: "190",
	price: 30000
};

let TOYOTA = {
    mark: "ტოიოტა",
	color: "ვერცხლისფერი",
	model: "A5",
	year: "2018",
	power: "200",
	price: 40000
};

let HONDA = {
    mark: "ჰონდა",
	color: "ნაცრისფერი",
	model: "A6",
	year: "2018",
	power: "150",
	price: 10000
};

let cars = [];

cars.push(Audi);
cars.push(BMW);
cars.push(TOYOTA);
cars.push(HONDA);

let prices = [HONDA.price, BMW.price, Audi.price, TOYOTA.price];

let averageOfNumbers = averageOfNumbersInArray(prices);

console.log(`Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის: ${averageOfNumbers}`);

function averageOfNumbersInArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	return sum / array.length;
  }

  //2) რომელიც პოულობს და აბრუნებს მაქსიმალურ რიცხვს მასივში. და მისი გამოყენებით დაბეჭდეთ თქვენს კოლექციაში არსებული 
  //ყველაზე ძვირიანი მანქანის ფასი. შემდეგი მესიჯის სახით:
  //“ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის : x” სადაც x რეალური რიცხვია.

let maxPrice = maxPriceInarray(prices);

console.log(`ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის: ${maxPrice}`);

function maxPriceInarray(array) {
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        if(currentElement > max) {
            max = currentElement
        }
    }
    return max;
}