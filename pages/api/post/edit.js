import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
    if (req.method =='POST') {
        let 글수정 = {title : req.body.title, content : req.body.content}
        let db = (await connectDB).db('next-practice');
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)},
            {$set : 글수정});
        console.log(result)
        return res.redirect(302, '/list')

    }
}