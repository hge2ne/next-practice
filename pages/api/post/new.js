import { connectDB } from "@/util/database.js"
export default async function handler(req, res) {
    if (req.method =='POST') {
        let db = (await connectDB).db('next-practice');
        let result = db.collection('post').insertOne(req.body)
        return res.redirect(302, '/list')
    }
    }