DATA STRUCTURES AND ALGORITHEMS OF JAVASCRIPT QUESTIONS

Sorting an array Without using index values;

Qestion1); Sorting an array


const bubbleSort = (arr) => {
  let len = arr.length
  for (let i=0; i < len; i++) {
    for(let j=0; j < len; j++){  // 0,1,2,3,4
      if (arr[j] > arr[j + 1] ) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j+1] = temp
      }
    }
  }
  
  return arr
  
}
console.log(bubbleSort([1,2,3,4,5]))



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
console.log(calculateSum(products))
  
  
  //  Remove the duplicate numbers in an array
4) var numbers = [1,3,3,5,5,7,8]


const removeDuplicate = (arr) => {
  let object = {} // {1: true,3: true, 5:true,7: true,8:true}
  let result = [] // [1,3,5,7,8]
  
  for (let i =0; i < arr.length; i++){
    if(!object[arr[i]]){
      result.push(arr[i])
    }
    object[arr[i]] = true
  }
  return result
}

console.log(removeDuplicate(numbers))

  
5) Sum Of digits in an array
let number = 123;

const sumDigits = (num) =>{
  let arr = num.toString().split("").map(Number) // [1,2,3]
  
  return arr.reduce((acc, curr) => {
    let sum = acc + curr
    return sum
  })
}

console.log(sumDigits(number))  
  
  
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

const reverseString = (str) =>{
  let result = ""
  for (let i = str.length -1; i >= 0; i--) { // reverse the whole string
    result += str[i]
  }
  return result
}

console.log(reverseString("welcome to web pack group)) //puorg kcap bew ot emoclew


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








// 1) Find Duplicate numbers in an array

const findDuplicatesArray = (arr)  => {
  let sortedArray = arr.slice().sort() // [2,3,3,4,4,5,6,7,9,9]
                                        // 0,1,2,3,4,5,6,7,8,9 Indexing Values
  let results = []
  for (let i= 0; i< sortedArray.length-1;i++){ // 0 1 2 3 4 5 6 7 8,9
  
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



3) Find out The Duplicate array 

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
console.log(linearSearch([4,5,6,7,0,1,2] , 0))
console.log(linearSearch([4,5,6,7,0,1,2] , 3))



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




2) FEATURES OF DBMS:

✅Key Features of MongoDB:🌟

1️⃣Document-based storage: MongoDB stores data in JSON-like BSON (Binary JSON) format, where each piece of data is represented as a document. A document is a set of key-value pairs and is analogous to a row in a relational database.

2️⃣Dynamic schema: Unlike traditional relational databases, MongoDB does not require a fixed schema. Each document in a collection can have a different structure, giving developers greater flexibility when working with evolving or diverse data.

3️⃣Scalability: MongoDB is designed to scale horizontally, meaning you can distribute data across multiple servers or clusters to handle large amounts of data and high traffic loads efficiently.

4️⃣Replication: MongoDB supports data replication, allowing you to create redundant copies of your data across multiple servers. This ensures high availability and fault tolerance.

5️⃣Indexing: MongoDB provides support for various types of indexes, enabling faster data retrieval and improved query performance.

6️⃣Aggregation framework: MongoDB offers a powerful aggregation framework that allows you to perform complex data processing tasks, such as filtering, grouping, and transforming data within the database itself.

7️⃣Sharding: MongoDB can shard data across multiple servers to distribute the data workload and achieve horizontal scaling.
