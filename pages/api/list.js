import { connectDB } from "@/util/database.js"
export default async function handler(req, res) {
    let db = (await connectDB).db('next-practice');
    let result = await db.collection('post').find().toArray();
    return res.status(200).json(result)
}
