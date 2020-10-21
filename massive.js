//Basic
// const friends = ['Mango', 'Kiwi','Poly','Ajax'];
// console.table(friends);


// friends[1] = 'qweqwe';
// friends[2] = 'qqweqwee';
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// const a = [1, 2, 3];
// const b = a;

// console.table(a);
// console.table(b);

// a[0] = 500;

// console.table(a);
// console.table(b);

// console.log (a === b);
// console.log ([1, 2, 3] === [1, 2, 3]);

// const friends = ['Mango', 'Kiwi','Poly','Ajax'];
// console.table(friends);
// // for(let i = 0; i < friends.length; i += 1) {
// //     friends[i] += '-1';
// //     console.log(friends[i]);
// // }

// for (const friend of friends) {
//  console.log(friend);
// }


//Payment

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;
// // for (let i = 0; i < cart.length; i += 1) {
// //     console.log(cart[i]);

// //     total += cart[i];
// // }

// for (const number of cart){
//     console.log(number);
//     total += number;
// }

// // console.log('Total:', total);

// // // for (let i = 0; i < cart.length; i += 1) {
// // //     cart[i] = Math.round(cart[i] * 1.1);
// // // }
// // // console.log(cart);

// //Even

// // const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];
// // let total = 0;

// // for (const number of numbers){
// //     console.log(number);

// //     if (number % 2 === 0) {
// //         console.log('парне')
// //         total += number;
// //     }
// // }

// // for (const number of numbers){
    
// //     if (number % 2 !== 0) {
// //         console.log('Треба пропустити', number);
// //         continue
// //     }
    
// //     console.log('Парне', number);
// //     total += number;
// // }
// // console.log('Total:', total);

// // Login
// // const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// // const loginToFind = 'poly1scute';
// // let message = '';

// // for (let i = 0; i < logins.length; i += 1) {
// //     const login = logins[i];

// //     console.log('Login: ', login);

// //     if(login === loginToFind) {
// //         message = `Пользователь ${loginToFind} найден.`;
// //         break
// //     }    
// //         message = `Пользователь ${loginToFind} не найден.`;   
// // }

// // for (const login of logins) {
// //     if(login === loginToFind) {
// //         message = `Пользователь ${loginToFind} найден.`;
// //         break
// //     }    
// //         message = `Пользователь ${loginToFind} не найден.`;
// // }

// // console.log(message);
// // const a = 5 > 10 ? 'ага' : 'нет';

// // const messages = logins.includes(loginToFind) 
// // ? `Пользователь ${loginToFind} найден.` 
// // : `Пользователь ${loginToFind} не найден.`;

// // console.log(messages);


// //Smallest number

// // const numbers = [51, 18, 13, 24, 7, 85, 19];
// // let smallestNumber = numbers[0];

// // for (const number of numbers) {
// //     if (number < smallestNumber) {
// //         smallestNumber = number;        
// //     }    
// // }

// // console.log('smallestNumber: ', smallestNumber);

// //Transform

// // const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // // let string = '';

// // // for (const friend of friends) {
// // //     string += friend + ',';
    
// // // }
// // // string = string.slice(0, string.length - 1)
// // // console.log(string);
// // // console.log(string.length);

// // const string = friends.join(',');
// // console.log(string);

// //Change register

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
    
//     // if(letter === letter.toLowerCase()) {
//     //     console.log('Ця буква в нижньому регістрі', letter);

//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     console.log('Ця буква в верхньому регістрі', letter);
//     //     invertedString += letter.toLowerCase();
//     // }


//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

//Slug

// const title = 'Top 10 benefits of React framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// // const words = normalizedTitle.split(' ');
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

//Array sum

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2, [1, 2, 3, 5]);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// //Cards

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];

// console.table(cards);

// // const cardToRemove = 'Карточка-3';
// // const index = cards.indexOf(cardToRemove);
// // console.log(index);
// // cards.splice(index, 1);
// // console.table(cards);

// // const cardToInsert = 'Карточка-6';
// // const index = 3;
// // cards.splice(index, 0, cardToInsert);
// // console.table(cards);

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(3, 1, 'Обновленная карточка-4');
// console.table(cards);


//Function

// const add = function (a, b) {
//     console.log(a);
//     console.log(b);
//     const result = a + b;
//     console.log('Виконуєтся функція add')
    
//     return a * b;
// }

// const r1 = add(2, 3);       //те шо я ставлю в return, це результат з функції
// console.log('r1:', r1);
// const r2 = add(12, 13);
// console.log('r2: ', r2);
// const r3 = add(22, 23);
// console.log('r3: ', r3);

// const fn = function(value) {
//     console.log(1);

//     console.log(2);
//     if ( value < 50) {
//         return 'Менше 50';
//     }

//     return 'Більше 50';
//     return 2;
//     return 3;
// }

// console.log(fn(10));
// console.log(fn(1000));


// const fnA = function() {
//     console.log('Выполняется функция A');

//     fnB();
// }

// const fnB = function() {
//     console.log('Выполняется функция B');

//     fnC();
// }

// const fnC = function() {
//     console.log('Выполняется функция C');

//     console.log(value);
// }

// fnA();

// Задача

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);


// const calculateTotalPrice = function (items) {
//     console.log('items внуцтри ф-ции: ', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }
// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сума покупок ${r1}`);

// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 12, 25, 90]));

//LOG ITEMS

// const logItems = function(items){
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango','Kiwi','Poly','Ajax']);
// logItems([1,2,3,4,5]);
// logItems(['клавиатура','наушники','часы']);

//Find Login

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// const findLogin = function(allLogins, loginToFind) {        
//     return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'aj4xth3m4n'));

// Find Smallest Number

// const numbers = [51, 18, 13, 24, 7, 85, 19];


// for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;        
//         }    
//     }
    
    // console.log('smallestNumber: ', smallestNumber);

    // const findSmallestNumber = function (numbers) {
    //     let smallestNumber = numbers[0];

    //     for (const number of numbers) {
    //         if (number < smallestNumber) {
    //             smallestNumber = number;
    //         }
    //     }

    //     return smallestNumber
    // }


    // console.log(findSmallestNumber([3, 8, 12, -2, 15]));
    // console.log(findSmallestNumber([100, 54, 8, 12, 47]));
    // console.log(findSmallestNumber([7, 21, 84, 15, 4]));

    // Change case

    // const string = 'qWeRTzxCv';
    // const letters = string.split('');
    // let invertedString = '';

    // for (const letter of letters) {
    //     const isEqual = letter === letter.toLowerCase();

    //     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
    // }

    // console.log('invertedString: ', invertedString);

//     const changeCase = function(string) {
//         const letters = string.split('');
//         let invertedString = '';

//         for (const letter of letters) {
//             const isInLowerCase = letter === letter.toLowerCase();

//             invertedString += isInLowerCase 
//             ? letter.toUpperCase() 
//             : letter.toLowerCase();
//         }

//         console.log(letters);
//         return invertedString;
//     }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));


// Slugify

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// const Slugify = function(string) {
//     return string.toLowerCase().split(' ').join('-');  // Easy LOL
// }

// console.log(Slugify('Top 10 benefits of React framework'));
// console.log(Slugify('Azure Static Web Apps are Awesome'));
// console.log(Slugify('Technical writing tips for non-native English speakers'));

//Arguments

// const fn = function () {
//     console.log(arguments);
    
//     const args = Array.from(arguments);

//     console.log(args);
// };

// fn(1, 2, 3,);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a,b,c, ...args) {
//     console.log(`${a} ${b} ${c}`)
//     console.log(args);
// };

// fn('hello', 1, 2, 3,);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

const add = function (...args) {
    console.log(args);

    let total = 0;

    for (const arg of args) {
        total += arg;
    }
    return total;
};

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

const filterNumbers = function(array, ...args) {
    console.log('array: ', array);
    console.log('args: ', args);
    const uniqueElements = [];

    for (const element of array) {        
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} есть везде`)            
        }
    }
    return uniqueElements;
};

console.log(filterNumbers([1,2,3,4,5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10,15,25,30],23,30,18,15));
console.log(filterNumbers([100,200,300,400,500], 7, 12, 200, 64));