// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)

function customSummator(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new RangeError();
  }
  if (typeof n !== "number") {
    throw new TypeError();
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// customSummator(4);
// 10
// customSummator(1);
// 1
// customSummator(10);
// 55

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

const faculty = {
  faculty: "1st faculty of Humor",
  chair: "Chair of Stupid and Toilet Humor",
};

const student = {
  name: "John",
  surname: "Dou",
  ifMale: true,
  contactData: {
    tel: 380678835265,
    email: "john99dou@testmail.io",
  },
  faculty,
};

// typeof item[1] === "object" ? studentInfo(item[1]) : item;

function studentInfo(student) {
  return Object.entries(student).map((item) => {
    if (typeof item[1] === "object") {
      return studentInfo(item[1]);
    } else {
      return item;
    }
  }).flat();
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const arr1 = new Array(25).fill().map((_, numb) => numb);
// (25) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

// 3.1*Инициализация с помощью случайных чисел
const arr2 = new Array(25).fill().map(() => Math.round(Math.random() * 100));
// (25) [80, 5, 34, 82, 35, 82, 35, 53, 61, 29, 28, 35, 19, 66, 8, 11, 10, 95, 92, 32, 79, 20, 73, 58, 15]

// 3.2 Вывести элементы с четными индексами
const evenIndexOfArr = arr1.filter((_, numb) => numb % 2 === 0);
// (13) [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
const evenOfArr = arr1.filter((item) => item % 2 === 0);
// (13) [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
const idexOfZeroOfArr = [];
arr1.forEach((item, numb) =>
  item === 0 ? idexOfZeroOfArr.push(numb) : undefined
);
// [0]

// 3.5 Подсчитать количество нулевых элементов
const zeroItemsAmount = arr1.filter((item) => item === 0).length;
// 1

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(author, name, yearOfPublsng, publisher) {
    this.author = author;
    this.name = name;
    this.yearOfPublishing = yearOfPublsng;
    this.publisher = publisher;
  }
}

class EBook extends Book {
  constructor(author, name, yearOfPublsng, publisher, fileType, eNumber) {
    super(author, name, yearOfPublsng, publisher);
    this.fileType = fileType;
    this.enumber = eNumber;
  }
}

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function fizzBuzzer(n) {
  if (n <= 1 || !Number.isInteger(n)) {
    throw new RangeError();
  }
  if (typeof n !== "number") {
    throw new TypeError();
  }

  new Array(n)
    .fill()
    .map((_, numb) => {
      if ((numb + 1) % 30 === 0) {
        return "fizzbuzz";
      }
      if ((numb + 1) % 3 === 0) {
        return "fizz";
      }
      if ((numb + 1) % 5 === 0) {
        return "buzz";
      }
      return numb + 1;
    })
    .forEach((item) => console.log(item));
}
