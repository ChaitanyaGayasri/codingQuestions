DATA STRUCTURES AND ALGORITHEMS OF JAVASCRIPT QUESTIONS

Sorting an array Without using index values;

Qestion1); Sorting an array


const bubbleSort = (arr) => {
  let len = arr.length
  for (let i=0; i < len; i++) {
    for(let j=0; j < len; j++){  // 0,1,2,3,4
      if (arr[j] > arr[j + 1] ) {
      let temp = arr[j]
      arr[j] = arr[j + 1]// Swaping thier position
      arr[j+1] = temp // Reverse the position
      }
    }
  }
  
  return arr
  
}
console.log(bubbleSort([5,4,3,2,1]) // [1,2,3,4,5]

DSA )     
// KADENES ALGORITHEM - DSA
// SubArray means adding array of elements one by one 
function largestSubArray(arr) {
  
  let maxSum = arr[0]
  for (let i=0; i<arr.length; i++){
    let currentSum = 0
    for (let j=i; j<arr.length; j++) {
      currentSum = currentSum + arr[j] 
      console.log(currentSum)// it will add 0 + -2 = -2 or -2 + 1 = -1 etc
      if (currentSum > maxSum){
        maxSum = currentSum
      }
    }
  }
  return maxSum
}

console.log(largestSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6 [4,-1,2,1]
            

2)   // Write a function that returns the longest word in the sentence returns the string
// find out the longest word in the string or array
const longestWord = (str) => {
  let splitStr = str.split(" ") // using split method we pass the strings inside brackets without using space return the single values or with space will return the arr of values 
  largestWord = ""
  for (let word of splitStr){ // loop through those ele 
    if (word.length > largestWord.length){ // find out the length values and compare it with largestword 
      largestWord = word //   replace which ele as highest value 
    }
  }
  console.log(largestWord) // Chaitanya
}
longestWord("My Name is Chaitanya")





2) // write a function that returns the number of vowels in a string

const numberOfVowels = (str1) => {
  numner = 0
  vowels = ["a","e","i","o","u"]
  
  for (let char of str1.toLowerCase()){
    if (vowels.includes(char)){
      numner = numner + 1
    }
  }
  console.log(numner)
}

numberOfVowels("Hellow, World")



2) Double The Price of array of objects

const products = [
  
  { id: 1,
    category: "Electronics",
    type: "Mobile",
    name: "Iphone",
    price: "50000"
  },
  
  {
    id: 2,
    category: "Electronics",
    type: "Tv",
    name: "Lg",
    price: "20000",
  },
  
  { id: 1,
    category: "Electronics",
    type: "Mobile",
    name: "Samsung",
    price: "40000"
  }
  
  
  ]

const productItem = (arr) => {
  return arr.map((Item) => {
    if (Item.type == "Mobile"){ 
      return {
        ...Item, // Rest oprator to unpack all the elements of Item
        price: Item.price * 2 // Double the price an item
         
       }
    }
    return Item;
  })
}
console.log(productItem(products))
  
3)  Double The Prices of array of an object :

const products = [
  
  { id: 1,
    category: "Electronics",
    type: "Mobile",
    name: "Iphone",
    price: "50000"
  },
  
  {
    id: 2,
    category: "Electronics",
    type: "Tv",
    name: "Lg",
    price: "20000",
  },
  
  { id: 3,
    category: "Electronics",
    type: "Mobile",
    name: "Samsung",
    price: "40000"
  }
  
  
  ]

const calculateSum = (arr) => {
  const FilterMobiles = arr.filter((item) => { // filter method 
    if (item.type == "Mobile") {
      return item
    }
  })
  
  const totalPrice = FilterMobiles.reduce((accumulator, currentValue) =>{  // accumulator is previous value a
    return parseInt(accumulator.price) + parseInt(currentValue.price) // parseInt the values like convert str to number
  })
  
  return totalPrice
}
console.log(calculateSum(products)) //90,000
  
  
  //  Remove the duplicate numbers in an array
4) var numbers = [1,3,3,5,5,7,8]


const removeDuplicate = (arr) => {
  let object = {} // {1: true,3: true, 5:true,7: true,8:true}
  let result = [] // [1,3,5,7,8]
  
  for (let i =0; i < arr.length; i++){
    if(!object[arr[i]]){  // not operator it will check the arr of elements if the value is their return the true or false
      result.push(arr[i]) // pushing the ele in an array
    }
    object[arr[i]] = true
  }
  return result
}

console.log(removeDuplicate(numbers))

  
5) Sum Of digits in an array
let number = 123;

const sumDigits = (num) =>{
  let arr = num.toString().split("").map(Number) // convert normal number to array like [1,2,3] 
//let arr = +num // 123  
  return arr.reduce((acc, curr) => {
    let sum = acc + curr
    return sum
  })
}

console.log(sumDigits(number)) //6 
  
  
6)  / compute the exponent of number
const power = (base,exp) => {
  if (exp === 0) return 1  // 1
  return base * power(base, exp-1) // recursive case 
}
console.log(power(2,4)) // 16
// 2 * (2, 3) -> 8
// 2* (2, 2) -> 4
// 2 * (2, 1)-> 2
//2 * (2, 0) -> 1


7) Reverse a String or Number
1)
const reverseString = (str) =>{
  let result = ""
  for (let i = str.length -1; i >= 0; i--) { // reverse the whole string and Values
    result += str[i]
  }
  return result
}

console.log(reverseString("welcome to web pack group)) //puorg kcap bew ot emoclew
2) function reverseString(str) {
  console.log(str.split("").reverse().join(""))
}

reverseString("My Name Is Chaitanya")

8)   
// Find the Missing Number From 1 to n
const missingNumber = (arr) => {
  let result = 0
  let n = arr.length + 1
  let totalNum = n * (n+1) / 2 // 28
  
  for (let i=0; i < arr.length; i++){
    result += arr[i]// add the num like 5, 5+2=7, 7 + 6 = 13,13+1= 14,14+3=17, 17+7=24
  }
  return totalNum - result // 28 -24 = 4
}

console.log(missingNumber([5,2,6,1,3,7]))

9)   // Fibonacci number 

// Fibonacci Series  -> 0,1,1,2,3,5,8,13,21,34...
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) 

// Input n = 3  output = 2


var Fibonacci = function(num) {
  const arr = [0,1]
  
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  console.log(arr)
  return arr[num]
}

console.log(Fibonacci(5))

10)   / palindrome Number 
// an integer is an palindrome when it reads same forward and backward
const isPalandrome = (num) => {
  return num === +num.toString().split("").reverse().join("")
}

console.log(isPalandrome(121)) // true
// Write a function that checks weather a given string is palindrome or not 

const isPalindrome = (str) => {
  let reverseStr = str.split("").reverse().join("")
  console.log(str === reverseStr) // True
}
isPalindrome("racecar")
// split method convert str no to split the ["1","2","3"]
// reverse method what it will do the reverse the number 
// join methos what it will do join the strings 

11) 
// Valid IsAnagram 

// Input = s = ("anagram"), (t= "nagaram") output = true
// Input = t = ("rat"), (t="car") output = false

 const isAnagram1 = function(s,t){
  s = s.split("").sort().join("")
  t = s.split("").sort().join("")  
  console.log(s)  // aaagmnr
  console.log(t)  // aaagmnr
  return s === t
 }
 
 console.log(isAnagram1("anagram","nagaram"));
 
 //output 

12)
// two sum 
// given an integers of nums and an integer target
//return indices of two numbers such that they add up to the target
// Input nums = [2,7,11,15], target = 9

const twoSum = function(nums,target) {
  for (let i=0; i < nums.length; i++) {
    for (let j = i+1; j< nums.length; j++) {
      if (nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}

console.log(twoSum([2,7,11,15],9))


// 1) Find Duplicate numbers in an array

const findDuplicatesArray = (arr)  => {
  let sortedArray = arr.slice().sort() // [2,3,3,4,4,5,6,7,9,9] sorting those elements
                                        // 0,1,2,3,4,5,6,7,8,9 Indexing Values
  let results = []
  for (let i= 0; i< sortedArray.length-1;i++){ // 0 1 2 3 4 5 6 7 8
  
    if (sortedArray[i+1] === sortedArray[i]) {  // Here it will check index wise if values are findout duplicate number then it will  updated on new array. 
    // 
      results.push(sortedArray[i]) // pushing all the dupicate numbers to a new array
    }
  }
  
  return results 
  
}

let array = [9,9,2,3,3,4,4,5,6,7,]

console.log(findDuplicatesArray(array)) //[3,4,9] solution


// 2) compare two srings charcters are different 

let str1 = "codehere"
let str2 = "ocdehere"

function checkString(val1,val2) {
  let arra1 = val1.split("").sort().join("") // split method what it will do it will split the str values like ['c','o'] , join method join the values of elements in arra 
  let arra2 = val2.split("").sort().join("") // sort method what it will do sort the values of str values like [c,d,e,h,o,r] get all elements in one manner 

  
  if (arra1 === arra2){
    return true
  }else {
    return false
  }
  
}

console.log(checkString(str1,str2))  // true or cdeehor,cdeehor

// Remove duplicates from an array 

const removeDuplicate = (arr) => {
  let emptyArray = []
  for (let i=0; i < arr.length; i++){
    if (emptyArray.indexOf(arr[i]) === -1) {
      emptyArray += arr[i]
    }
  }
  console.log(emptyArray)

}

removeDuplicate([1,2,3,3,4,4,5,6,6]) // 123456

3) Find out The Duplicate string

let arr = ["aaa","bbb","ccc","aaa","bbb"]

let obj = {}
for (let i=0; i< arr.length; i++){
  let item = arr[i]
  if (obj[item]){
    obj[item] = obj[item] + 1
  }else{
    obj[item] = 1
  }

}

console.log(obj) // { aaa: 2, bbb: 2, ccc: 1 } solution




// find the missing number in an array

const arr = [1,2,3,4,5,6,9,10]


const missArray = []
const missingNum = (arr) => {
  const maxValue = Math.max(...arr)
  const minValue = Math.min(...arr)
  
  for (let i=minValue;i<maxValue;i++) {
    const name = arr.indexOf(i) 
    console.log(name)
    if (arr.indexOf(i) < 0) {  // 0,1,2,3,4,5,-1,-1,6
      missArray.push(i)
    }
  }

  return missArray
}

console.log(missingNum(arr)) // [7,8]

 
4) HOW TO MAKE A API FETCH CALL IN AN APPLICATION:

recyle methds ;
1) MOUNTING PHASE: CONSTRUCTOR METHOD OR STATE METHOD 
2) UPDATING PHASE: RENDER()
3) UNMOUNTING PHASE: 1) componentDidMount  and componentWillMount only

state = {blogsData: []}

  componentDidMount() {   MAKE A API CALL ONLY componentDidMount Only
    this.getBlogsData()
  }

  getBlogsData = async () => {   
    const Response = await fetch('https://apis.ccbp.in/blogs')   fetch method fetch all the details of url 
    const Data = await Response.json()   Data which we are  // promise object  & json object always have a snake case characters so we need to convert that into frontend part is only look for camel case 
    const updateData = Data.map(eachItem => ({   iterating over through an map returns a new array
      id: eachItem.id,         
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    this.setState({blogsData: updateData}) 
  }


5)    FUNCTION BINDING : 

In JavaScript function binding happens using Bind() method. With this method, we can bind an object to a common function, 
so that the function gives different results when needed. otherwise, it gives the same result or gives an error while the code is executing. 
We use the Bind() method to call a function with this value, this keyword refers to the same object which is currently selected. 
In other words, the bind() method allows us to easily set which object will be bound by this keyword when a function or method is invoked. 
The need for bind usually occurs, when we use this keyword in a method and we call that method from a receiver object, then sometimes this is not bound to the object that we expect to be bound to. 
This results in errors in our program. Now, a simple program to print the name which is called by this keyword when the function printFunc() is invoked. 


let geeks = {
    name: "ABC",
    printFunc: function () {
        console.log(this.name);
    }
}
  
geeks.printFunc();



6)   /Input = [4,5,6,7,0,1,2] target = 0 
// inpu2 = [4,5,6,7,0,1,2] target = 3

const linearSearch = (arr, target) => {
  
  for (var i = 0; i < arr.length; i++) {
    if (target === arr[i]){ // values are equal or not check then it will update true otherwise it will not update the values
      return i
    }
  }
  
  return -1
}
console.log(linearSearch([4,5,6,7,0,1,2] , 0))//4
console.log(linearSearch([4,5,6,7,0,1,2] , 3))//-1



EXAMPLE 2 :

function linearSearch(num,target) {
  let start = 0
  let end = num.length-1
  
  while(start <= end) {  // iterate 0 to 5
    let middle = Math.floor((start + end) / 2) // here midile value 2.5 math floor convert value to 3 ex. (0 + 5)/  2 = 2.5 convert 3
    
    if (num[middle] === target){  // check
      return middle
    }else if(num[middle] < target) {
      start = middle + 1
    }else {
      end = middle -1
    }
  }
  return -1
}
console.log(linearSearch([-1,0,3,5,9,12] , 9))
console.log(linearSearch([-1,0,3,5,9,12] , 2))



INBUILT JAVASCRIPT METHODS
// Arrays in Javascript

// Decalaration
let arr = ["apple", "banana", "cherry"];

arr.push("orange")// add new element to end of an array
arr.pop() // remove an element end of an array
arr.unshift("orange") // add an element to top of an array
arr.shift() // remove an element to top of an array
console.log(arr)

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
  return prev + item;
}, 2);

// some in javascript
numbers.some((item, index, array) => {
  return item > 3;
});

// every in javascript
numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorte

//  A Simple Promise Object
const testPromise = new Promise((resolve, reject) => {
  let value = 2;

  if (value < 4) {
    resolve('value is less than 4');
  } else {
    reject('value is greater sthan 5');
  }
});
testPromise
  .then((res) => {
    console.log('success: ===>', res);
  })
  .catch((err) => console.log('error: ===>', err));


>>>>>>>>     // Implicit Conversion:
// 1) impilicit Conversion to string:

// numeric string used with + gives string type

 let result = "3" + 2    // When try to use the addition plus symbol between string posetition it concate both the values 
 let result2 = "3" + "2" 
console.log(result) // 32
console.log(result2) // 32

// 2) impilicit conversion to Number:

// numeric string used with -,/,* results number type

let res3 = "4"-"2" // when try to use - or * or / symbol between string positions 
let res4 = "4" * "2"// symbols are very importent
let res5 = "4" / "2" 
console.log(res3)// 2
console.log(res4)// 8
console.log(res5)// 2

// 3) impilicit conversion to boolean:

// if Boolean is used true is 1 , false is 0
let result6 = "4" - true
let result7 = "4" - false

console.log(result6)//3
console.log(result7)//4


let result8 = "Hello" - "WOrld" // "Hello" + "WOrld" // HelloWorld
console.log(result8)//NaN

// Explicit Conversion:
// convert numeric strings and Boolean values to numbers , you can use Number()

let result9 = Number("324")
console.log(result9) // 324 it convert to Number data type

// convert other data type to string you can use either String() or toString() 
let result10 = string(324)
console.log(result10)//"324" convert number to string



2) FEATURES OF DBMS:

✅Key Features of MongoDB:🌟

1️⃣Document-based storage: MongoDB stores data in JSON-like BSON (Binary JSON) format, where each piece of data is represented as a document. A document is a set of key-value pairs and is analogous to a row in a relational database.

2️⃣Dynamic schema: Unlike traditional relational databases, MongoDB does not require a fixed schema. Each document in a collection can have a different structure, giving developers greater flexibility when working with evolving or diverse data.

3️⃣Scalability: MongoDB is designed to scale horizontally, meaning you can distribute data across multiple servers or clusters to handle large amounts of data and high traffic loads efficiently.

4️⃣Replication: MongoDB supports data replication, allowing you to create redundant copies of your data across multiple servers. This ensures high availability and fault tolerance.

5️⃣Indexing: MongoDB provides support for various types of indexes, enabling faster data retrieval and improved query performance.

6️⃣Aggregation framework: MongoDB offers a powerful aggregation framework that allows you to perform complex data processing tasks, such as filtering, grouping, and transforming data within the database itself.

7️⃣Sharding: MongoDB can shard data across multiple servers to distribute the data workload and achieve horizontal scaling.
