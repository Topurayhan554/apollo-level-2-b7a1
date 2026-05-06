// Problem No - 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result1);

// Problem - 2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

const result2 = reverseString("typescript");
console.log(result2);

// Problem - 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

console.log(checkType("Hello"));
console.log(checkType(42));

// Problem - 4

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const userName = getProperty(user, "name");

console.log(userName);

// Problem - 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));

// Problem - 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student1 = new Student("Alice", 20, "A");
console.log(student1.getDetails());

// Problem - 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};

const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result);
