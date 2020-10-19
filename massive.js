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

//Cards

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);
cards.splice(3, 1, 'Обновленная карточка-4');
console.table(cards);