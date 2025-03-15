import {  Post} from "../../../types";
import SingleBlog from "./singleBlog";

function Blogs() {
    
    const blogs :Omit<Post,"body">[]=[{id:1,title:"obesity is a very dangerous",date:"4/5/2025"}, {id:2,title:"obesity is a very dangerous",date:"2/7/2025"},{id:3,title:"obesity is a very dangerous",date:"2/8/2025"}]
    return( <div className=" h-full p-3 bg-secondary rounded-sm space-y-3">
        <h2 className=" text-center text-2xl">Articles</h2>
        <hr />
{blogs.map(b=>{return (
    <SingleBlog id={b.id} title={b.title} key={b.id} date={b.date}/>
)})}
    </div> )
}

export default Blogs
