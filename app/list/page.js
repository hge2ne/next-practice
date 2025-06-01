import {connectDB} from "@/util/database.js"
import Link from "next/link"

export default async function List() {
    let db = (await connectDB).db('next-practice');//db연결
    let result = await db.collection('post').find().toArray();
    return (

        <div className="list-bg">
            {
                result.map((a, i) =>
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4>링크</Link>
                        < p> 1월 1일</p>
                    </div>
                )
            }
                </div>
                )}

