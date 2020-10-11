// const age = 10;
// const ageType = typeof (age);
// const totalPrice = 200.74;
// const userName = 'Chelsey';
// const message = 'Wellcome';
// const isOpen = true;
// const shouldConfirm = false;
// const shouldRenew = confirm('ok=true, cancel=false');

// console.log ('Вік:',age);
// console.log ( 'Ціна:', totalPrice);
// console.log ('Імя:',userName);
// console.log ('Повідомлення:',message);
// console.log ('Стан:',isOpen);
// console.log ('Підтвердження:',shouldConfirm);
// console.log ('Тип віку:',ageType);
// console.log (shouldConfirm);

// let quantity = prompt('cancel=null');
// quantity = Number(quantity);
// console.log (quantity);
// console.log (typeof quantity);

// NUMBERS

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log ('Виводим лише ціле число:',result);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight)

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log('відсікаєм лишні цифри: ',salary);


// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// console.log ('Степень: ',result);
// console.log ('Степень: ',2 ** 0.36);

// let base = prompt('davai chislo');
// base = Number(base);
// console.log(base);

// let power = prompt('davai stepen');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// const max = 50;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min)
// console.log('Рандомне число від макс до мін:',result);

// STRINGS

// const message = 'lol lolo lol loll';
// console.log('Довжина рядка: ',message.length);

// const firstName = 'Chelsey';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// const room = 716;
// const type = 'VIP';

// const welcomeMsg = `Гость ${fullName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);


// let brand = prompt('Give me a brand');
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);


// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Првиет, я принц Абдул, ето не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА етой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// console.log(15 > 2);

// const isEqual = 5 === '5';
// console.log(isEqual);

// LOGIC

// console.log(Boolean(0),Boolean(NaN),Boolean(null),Boolean(undefined),Boolean(''),Boolean(""),Boolean(false));
// console.log(Boolean('All is TRUE'));

// console.log(5 && 6 && 7 && 'hello');
// console.log(5 && 6 && 0 && 'hello');

// console.log(0 || null || false || undefined);
// console.log(false || 0 || 12|| 10);

// console.log(!true);
// console.log(!false);

// Quests

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1)

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x1)

// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, number > x1 && number < x2);

// console.log(`Число ${number} попадает в отрезок до ${x1}? или после ${x2}? `, number < x1 || number > x2)


// const isOnline = true;
// const isFriend = true;
// const isAfk = false;

// const canOpenChat = isOnline && isFriend && !isAfk;
// console.log('Можно открыть чат? ', canOpenChat);

// let sub = prompt('give me u sub type');

// const canAccessContent = sub === 'pro' || sub === 'VIP';
// console.log('Есть доступ к контенту? ', canAccessContent);

// IF

// if(33 > 30) {
//     console.log('nice');
// }
// console.log('bad');

// if(5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }


// const salary = 1000;
// if(salary <= 500) {
//     console.log('level 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('level 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('level 3');
// } else {
//     console.log('levle 4');
// }

// const balance = 1000;
// let message;

// if(balance >= 0) {
//     message = 'Positive balance';
// } else {
//     message = 'Negative balance';
// }

//  OR

// const message = balance >=0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

// const b = 10;
// if (true) {
//     console.log(b);

// const a = 5;
// console.log(a);
// }

// console.log(b);
// console.log(a);
// console.log(b);


// const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if(stars === 2) {
//     price = 30;
// } else if(stars === 3) {
//     price = 50;
// } else if(stars === 4) {
//     price = 70;
// } else if(stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звёзд нет');
// }

// switch(stars) {
//     case 1: 
//         price = 20;
//         break;
//     case 2: 
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//     case 6:
//         price = 120;
//         break;
//     default:
//         console.log('Такого кол-ва звёзд нету');
// }

// console.log(price);

// FOR

// for (let i = 13; i <= 666; i += 40 ) {
//     console.log(i);
// }

// console.log('lol');

// for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }

// let a = 10;
// const b = a += 1;

// console.log(a);
// console.log(b);


// Задача про ЗП
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 6;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i +=1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//     console.log(`ЗП работника номер ${i} = ${salary}`);

//     totalSalary += salary;    
// }
// console.log('Общая сумма ЗП: ', totalSalary)

//задача про суму парних чисел 

// const min = 5;
// const max = 15;
// let total = 0;

// for ( let i = min; i <= max; i += 1) {
//     // console.log(i);
//     if(i % 2 !== 0) {
//         console.log('Не парне: ',i);
//         continue;        
//     }     

//     console.log('Парне: ', i);        
//     total += i;      
// }
// console.log('Сума парних: ',total);


// ЗАДАЧІ


// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if(balance >= payment) {
//     console.log('Покупка совершена!');

//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');

// DISCOUNT

// let totalSpent = 0;
// let payment = 5000;
// let discount = 0;

// if(totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнёр, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнёт, скидка 5%');
//     discount = 0.05;
// } else if(totalSpent >=5000) {
//     console.log('Золотой партнёт, скидка 10%');
//     discount = 0.1;
// } else{
//     console.log('Не партнёр, скидка 0%');
// };

// payment -= payment * discount;

// console.log(`Оформляем заказ на суму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);