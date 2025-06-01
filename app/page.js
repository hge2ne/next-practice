import{connectDB} from "@/util/database.js"
import{MongoClient} from 'mongodb'
export default async function Home() {
    const client = await connectDB;
    const db = client.db("next-practice")
    db.collection().find()
    return (
    <div>
      <h1>Home</h1>
    </div>
  )}