if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const config = require("./backend/config/database");
const { MongoClient } = require("mongodb");
const companyInfos = require("./companyinfos");

// Replace the following with your Atlas connection string
const url = config.database;
const client = new MongoClient(url);

// The database to use
const dbName = "dsewebsite_database";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("companyinfos");

    // Construct a document

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(companyInfos);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
