export default function Write() {
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new"method="post"> {/*//post,get 요청방법*/}
                <input name="title" placeholder="제목"></input>
                <input name="content" placeholder="내용"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )}