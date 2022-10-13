import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://ssillah:Genius10@cluster0.nazgy.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      console.log(result);
      client.close();

      res.status(201).json({ message: "meetup added successfully" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
