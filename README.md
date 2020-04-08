# 10 Array methods you must know in javascript.

Arrays are crucial part of javascript. They let us store multiple elements in a single variable. Imagine you have 100 contacts, creating a variable for each one will be very hard. With arrays, you can store the contacts in a single variable using an array.

Arrays come with built-in methods that give us the power to mutate and transform data as we see fit.

In this article, we'll take a look at 10 array methods and their use cases.

## 1. Filter()

Have you heard of Higher order functions? Basically, higher order functions are methods that take a function as a parameter or return a function as an output just like the filter method. The filter method literally filters through an array an return an output base on the condition (function) it takes as an argument.

```javascript
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
```

## 2. Push()

This is perhaps one of the most used Array methods. The push method inserts the element it takes as an argument to the end of an existing array.

```javascript
const fruits = ['banana', 'mango', 'apple', 'kiwi'];

fruits.push('orange');

console.log(fruits);

// [ "bananan", "mango", "apple", "kiwi", "orange"]
```

## 3. Join()

This method creates and returns a string by joining all the elements inside of an array separated by commas or string.

```javascript
const names = ['Ola', 'james', 'jackie', 'nina'];
const joinAll = names.join('');

console.log(joinAll);
// Olajamesjackienina

const dashSeperator = names.join('-');

console.log(dashSeperator);
// Ola-james-jackie-nina
```

## 4. Map()

Remember Higher order functions? This also recieve a function as an argument. It creates a new array from the result of the argument it took.

```javascript
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
]
const newsTitle = news.map( news => news.title)

console.log(newsTitle)
// ["finally, tom has managed to eat jerry mouse",
// "UFO spotted in califionia"]


```

## 5. Splice()

This method removes or replaces an element to an existing array. Note that this method mutate the original array.

```javascript
//  replace an element
const cars = ['audi', 'volvo', 'benz', 'honda'];

//  @params start index, delete count, new dara
cars.splice(1, 0, 'BMW');

console.log(cars);
// ["audi", "volvo", "BMW", "benze", "honda"]
```

## 6. Concat()

I reckon everyone in the javascript community knows what concatenations is. This method is self-explanatory. From the name, it concatenates to arrays into one. The method is called on the first array, and takes the second array as an argument.

```javascript
const africa = ['nigeria', 'niger', 'ghana', 'kenya'];
const asia = ['korea', 'japan', 'vietnam', 'china'];

const countries = africa.concat(asia);

console.log(countries);

// ["nigeria", "niger", "ghana", "kenya", "korea", "japan", "vietnam", "china"]
```

## 7. Some()

Ah! here comes my fave array method. This method matches every element with the function it recieve and return a boolean.
i have used this method many times and below is an example of a recent use case.

```javascript
const postcodes = ['45220', '46689', '56322', '44520', '23252', '6422'];

const { postcode } = { name: 'james', paid: true, postcode: 45220 };

const isValidPostCode = postcodes.some((code) => code === postcode);

console.log(isValidPostCode);

// true
```

What happened? Let say we are building an order form. We have certain postcodes that we deliver to and don't want the customer to place an order to a location that we don't deliver. so we pull out the postcode they entered (line 2) and validate it using the some method. In the above code block, isValidPostCode will be true because the postcode matches what we have inside of our postcodes array.

## 8. Sort()

It wont be fun if we cannot sort the elements inside of an array. Fortunately, There's a method that let us do just that. The sort method in javascript returns an array of sorted elements base on the function it recieve as an argument. By default, it sort in ascending, but we can change that.

```javascript
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
```

## 9. FindIndex()

Finding the index of an element inside of array can be quite daunting espcially if that array is very big. Thankfully, with the findIndex method, we can do that with ease. The findIndex method takes a function and returns the index of the first element or a -1 If the element does not exist.

```javascript
const cars = ['audi', 'volvo', 'benz', 'honda'];

//  returns true
const carIndex = cars.findIndex((car) => car === 'honda');

console.log(carIndex);
// 3

//  returns false
const carIndex = cars.findIndex((car) => car === 'toyota');
console.log(carIndex);
//  -1
```

## 10. Slice()

This method slice through an array and returns the sliced part base on the starting index and slice count. it takes two arguments. The first argument is the starting index and the second argument the is the slice count from the starting index.

```javascript
const asia = ['korea', 'japan', 'vietnam', 'china'];

// @params starting index, slice count
const sliced = asia.slice(1, 2)

console.log(sliced)
```


