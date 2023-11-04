const {MongoClient} = require('mongodb');
/*old style */
//const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'node_database';
const collection_name = 'users';

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);                               
    let collection = db.collection(collection_name);
    return collection;
    // let response = await collection.find({}).toArray();
    // console.log(response);
}
module.exports = dbConnect;