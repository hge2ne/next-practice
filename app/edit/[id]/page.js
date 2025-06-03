import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Edit(props) {
    let db = (await connectDB).db('next-practice');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
   return (
    <div className="p-20">
        <h4>수정페이지임</h4>
        <form action="/api/post/edit"method="post"> {/*//post,get 요청방법*/}
            <input name="title" defaultValue={result.title}></input>
            <input name="content" defaultValue={result.content}></input>
            <input name="_id" defaultValue={result._id.toString()}></input>
            <button type="submit">수정</button>
        </form>
    </div>
   )
}