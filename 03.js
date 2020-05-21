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

//დაწერეთ ყველამ თქვენ-თქვენთვის საკლასო სამუშაოში გაკეთებულ ამოცანა user-ს შემოწმების შესახებ უნდა შექმნათ user-ების მასივი. 
//ყველა user-ს უნდა ქონდეს username და password ველები. და შემდეგ უნდა დაწეროთ 2 ფუნქცია:
//1) რომელიც ამოწმებს კონკრეტული string პარამეტრისთვის თუ არსებობს user ასეთი სახელით.
//2)რომელიც ამოწმებს მოიძებნება თუ არა user შემდეგი ველებით არგუმენტად მიღებული 2 სტრინგი possibleUsername და possiblePassword
//გამოიძახეთ ორივე ფუნქცია რამე ნებისმიერი string-ებისთვის და გააკეთეთ მესიჯების ლოგიკური ჯაჭვი რომ დაიბეჭდოს სწორი მესიჯები.
//“მოცემული სახელით მომხმარებელი არ მოიებნა”,
//“პაროლი არასწორია”,
//“შეხვედით სისტემაში წარმატებით”.
//და დაამატეთ მე3 ფუნქცია: პაროლის სიძლიერის შესამოწმებელი.
//თუ მომხმარებლის პაროლის სიგრძე ნაკლებია 8ზე წარმატებულად სისტემაში შესვლის შემთხვევაში დაუწეროს:
//“შეხვედით სისტემაში წარმატეით, თუმცა გთხოვთ შეცვალოთ პაროლი”

let user1 = {
    username: "Nino",
    password: "Aa123456"
};

let user2 = {
    username: "Natia",
    password: "Aa123"
};

let user3 = {
    username: "Giorgi",
    password: "Aa12345678"
};

let user4 = {
    username: "Nika",
    password: "Aa123456789"
};

let users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

function getFoundUser(users, possibleUsername) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === possibleUsername) {
            return users[i];
        }
    }
}

function checkPassword(user, possiblePassword) {
    let isSame = user.password === possiblePassword;
    return isSame;
}

function login(username, password) {
    let possibleUsername = getFoundUser(users, username);
    if(!possibleUsername) {
        console.log("მოცემული სახელით მომხმარებელი არ მოიებნა")
    } else {
    let isPasswordValid = checkPassword(possibleUsername, password);
    if (isPasswordValid) {
  	  if (isPasswordValid, password.length < 8) {
        console.log("შეხვედით სისტემაში წარმატეით, თუმცა გთხოვთ შეცვალოთ პაროლი");
    		} else {
                console.log("შეხვედით სისტემაში წარმატებით");
           			}
            } else {
            console.log("პაროლი არასწორია");
        }
    }
}




login("Nino", "Aa123456");