// 1) Find Duplicate numbers in an array

const findDuplicatesArray = (arr)  => {
  let sortedArray = arr.slice().sort() // [2,3,3,4,4,5,6,7,9,9]
  
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

console.log(findDuplicatesArray(array)) 


2) FEATURES OF DBMS:

✅Key Features of MongoDB:🌟

1️⃣Document-based storage: MongoDB stores data in JSON-like BSON (Binary JSON) format, where each piece of data is represented as a document. A document is a set of key-value pairs and is analogous to a row in a relational database.

2️⃣Dynamic schema: Unlike traditional relational databases, MongoDB does not require a fixed schema. Each document in a collection can have a different structure, giving developers greater flexibility when working with evolving or diverse data.

3️⃣Scalability: MongoDB is designed to scale horizontally, meaning you can distribute data across multiple servers or clusters to handle large amounts of data and high traffic loads efficiently.

4️⃣Replication: MongoDB supports data replication, allowing you to create redundant copies of your data across multiple servers. This ensures high availability and fault tolerance.

5️⃣Indexing: MongoDB provides support for various types of indexes, enabling faster data retrieval and improved query performance.

6️⃣Aggregation framework: MongoDB offers a powerful aggregation framework that allows you to perform complex data processing tasks, such as filtering, grouping, and transforming data within the database itself.

7️⃣Sharding: MongoDB can shard data across multiple servers to distribute the data workload and achieve horizontal scaling.
