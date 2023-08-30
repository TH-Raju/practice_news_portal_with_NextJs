
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        await client.connect();
        const newsCollection = client.db("news").collection("newses")
        if (req.method === 'GET') {
            const news = await newsCollection.find({}).toArray();
            res.send({ message: "Success", status: 200, data: news })
        }

        if (req.method === 'POST') {
            const news = req.body;
            const result = await newsCollection.insertOne(news)
            res.json(result)
        }

        if (req.method === 'GET') {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await newsCollection.findOne(query);
            res.send(result)
        }


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;
