// 3. LOOPS. FUNCTIONS
// 📀📀

// 1.
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// 1 спосіб через new  Set
// const arr = [5, 3, 4, 5, 6, 7, 3];
// const compact = function (array) {
//   return (array = [...new Set(array)]);
// };
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]
// 2 спосіб через filter
// const compact = function (array) {
//   const uniqueItems = array.filter(function (item, index) {
//     return array.indexOf(item) === index;
//   });
//   return uniqueItems;
// };

// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]
// console.log(arr);
// 2.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]
// const createArray = function (start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// };
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

// 3.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно,
//при цьому a виводится 1 раз,
//  число а+1 - два рази і т.д.

// function createArray(a, b) {
//   const arr = [];
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       for (let j = 1; j <= i; j++) {
//         arr.push(i);
//       }
//     }
//   } else if (a <= 0 && b <= 0) {
//     return "a , b data must not be negative";
//   } else if ((a = b)) {
//     return "The data is entered incorrectly";
//   }
//   return arr;
// }
// console.log(createArray(2, 5));

// function createArray(a, b) {
//   const arr = [];
//   if (a < b) {
//     arr.map
//       }
//     }
//     return arr;
//   } else {
//     return "The data is entered incorrectly";
//   }
// }
// console.log(createArray(1, 5));

// 4.
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
//Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
// function randArray(capacity) {
//   const arr = [];
//   for (let i = 0; i < capacity; i++) {
//     let randomNum = Math.round(Math.random() * (500 - 1) + 500);
//     arr.push(randomNum);
//   }
//   return arr;
// }
// console.log(randArray(5));
//узагальнення фнкція яка заповнюватиме масив k випадковими цілими числами із заданого діапазону
// function randArray(capacity, min, max) {
//   const arr = [];
//   for (let i = 0; i < capacity; i++) {
//     let randomNum = Math.round(Math.random() * (max - min) + max);
//     arr.push(randomNum);
//   }
//   return arr;
// }
// console.log(randArray(10, 100, 500));
// 5.
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних
//(не приводити тип стрінг в число навіть якщо там лише число)
let arr = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];
arr = arr.flat();
console.log(arr);
// function funcName(arr) {
//   const resultNumber = [];
//   const resultString = [];
//   const config = [resultNumber, resultString];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       resultNumber.push(arr[i]);
//     } else if (typeof arr[i] === "string") {
//       resultString.push(arr[i]);
//     }
//   }
//   return config;
// }

//2 спосіб через filter
function funcName(arr) {
  let resultNumber = [];
  let resultString = [];
  resultNumber = arr.filter(function (item) {
    return typeof item === "number";
  });
  resultString = arr.filter(function (item) {
    return typeof item === "string";
  });
  const config = [resultNumber, resultString];
  return config;
}

console.log(funcName(arr));
//  /*
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”]
// ]
// */

// 8. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
//Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

// const todayDay = new Date();
// const dayTime = todayDay.getHours();
// if (dayTime > 23 && dayTime <= 5) {
//   console.log("Доброї ночі");
// } else if (dayTime > 5 && dayTime <= 11) {
//   console.log("Доброго ранку");
// } else if (dayTime > 11 && dayTime <= 17) {
//   console.log("Доброго дня");
// } else if (dayTime > 17 && dayTime <= 23) {
//   console.log("Доброго вечора”");
// } else {
//   console.log("errrooorrrrr");
// }
