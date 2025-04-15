require('dotenv').config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1aj11.mongodb.net/?appName=Cluster0`;



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
  try {

    // Database & Collection
    const db = client.db("emaJhonDB");
    const productsCollection = db.collection("products");

    app.get('/products', async (req, res) => {
      const data = req.body;
      const result =await productsCollection.find(data).toArray();
      console.log(result)
      res.send(data)
    })

  } catch (error) {

  }
}

run().catch(console.dir)

app.get('/', (req, res) => {
  res.send("Emajhon server")
});

app.listen(port, () => {
  console.log(`server running port ${port}`)
});