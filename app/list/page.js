import{connectDB} from "@/util/database.js"

export default async function List() {
    let db = (await connectDB).db('next-practice');//db연결
    let result = await db.collection('post').find().toArray();
     return (

        <div className="list-bg">
            <div className="list-item">
                <h4>{result[0].title}</h4>
                <p>1월 1일</p>
            </div>
            <div className="list-item">
                <h4>{result[1].title}</h4>
                <p>1월 1일</p>
            </div>
            <div className="list-item">
                <h4>{result[2].title}</h4>
                <p>1월 1일</p>
            </div>
        </div>
    )
}