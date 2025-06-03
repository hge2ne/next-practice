import {connectDB} from "@/util/database.js"
import Link from "next/link"

export default async function List() {
    let db = (await connectDB).db('next-practice');
    let result = await db.collection('post').find().toArray();
    return (

        <div className="list-bg">
            {
                result.map((a, i) =>
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
                        <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                        < p> 1월 1일</p>
                    </div>
                )
            }
                </div>
                )}



