const employees = [
  {
    id: '001',
    name: 'Siradji',
    isPermanent: true,
  },
  {
    id: '002',
    name: 'Lydia',
    isPermanent: false,
  },
];

// Filters through employees array and return permanent employees.

const permEmployees = employees.filter(
  (employee) => employee.isPermanent === true
);
console.log(permEmployees);
//  [{
//     id: '001',
//     name: 'Siradji',
//     isPermanent: true,
//   }]

const fruits = ['banana', 'mango', 'apple', 'kiwi'];

fruits.push('orange');

console.log(fruits);

// [ "bananan", "mango", "apple", "kiwi", "orange"]

const names = ['Ola', 'james', 'jackie', 'nina'];
const joinAll = names.join('');

console.log(joinAll);
// Olajamesjackienina
const dashSeperator = names.join('-');

console.log(dashSeperator);
// Ola-james-jackie-nina

const news = [
  {
    title: 'finally, tom has managed to eat jerry mouse',
    publishedAt: 10,
    isAHit: true,
  },
  {
    title: 'UFO spotted in califionia',
    publishedAt: 11,
    isAHit: true,
  },
];
const newsTitle = news.map((news) => news.title);

console.log(newsTitle);
// ["finally, tom has managed to eat jerry mouse",
// "UFO spotted in califionia"]

const cars = ['audi', 'volvo', 'benz', 'honda'];

//  @params start index, delete count, new dara
cars.splice(1, 0, 'BMW');

console.log(cars);
// ["audi", "volvo", "BMW", "benze", "honda"]

const africa = ['nigeria', 'niger', 'ghana', 'kenya'];
const asia = ['korea', 'japan', 'vietnam', 'china'];

const countries = africa.concat(asia);

console.log(countries);

// ["nigeria", "niger", "ghana", "kenya", "korea", "japan", "vietnam", "china"]

const postcodes = ['45220', '46689', '56322', '44520', '23252', '6422'];

const { postcode } = { name: 'james', paid: true, postcode: 45220 };

const isValidPostCode = postcodes.some((code) => code === postcode);

console.log(isValidPostCode);

// true

const fruits = ['banana', 'mango', 'apple', 'kiwi'];

fruit.sort();

console.log(fruits);

// ["apple", "banana", "kiwi", "mango"]

const numbers = [9, 5, 7, 3, 2];

//  descending
numbers.sort((a, b) => b - a);

console.log(numbers);
// [9, 7, 5, 3, 2]

// ascending
numbers.sort((a, b) => a - b);
console.log(numbers);
// [2, 3, 5, 7, 9]

const cars = ['audi', 'volvo', 'benz', 'honda'];

//  returns true
const carIndex = cars.findIndex((car) => car === 'honda');

console.log(carIndex);
// 3

//  returns false
const carIndex = cars.findIndex((car) => car === 'toyota');
console.log(carIndex);
//  -1

const asia = ['korea', 'japan', 'vietnam', 'china'];

// @params starting index, slice count
const sliced = asia.slice(1, 2);

console.log(sliced);
