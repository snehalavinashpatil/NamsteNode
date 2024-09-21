const { MongoClient } = require('mongodb');

const url = "mongodb+srv://snehalohio:D5pQVy9VaZqFe2Ff@cluster0.gci99.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('table');

    //insert
    const insertResult = await collection.insertMany([{ fname: "chetas" ,lname: "patil" }]);
    console.log('Inserted documents =>', insertResult);
  
    // Read...
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log(countResult,"count Result");

    const result = await collection.find({fname:"chetas"}).toArray();
    console.log("filterd result",result);

    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
