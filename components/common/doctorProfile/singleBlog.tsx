import { Post } from "@/types";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";

export default function SingleBlog({title,id,date}:Omit<Post,"body">){
    return (
<div className=" flex  flex-col p-2 bg-white rounded-md w-[250px]">
    <div className=" flex gap-2 ">
    <h3>{title}</h3>
    <Link href={`/blogs/${id}`} className=" rounded-full border-2 border-primary p-[1px] animate-pulse hover:text-white hover:bg-primary transition-colors duration-300 text-primary"><MdOutlineArticle  size={17}/></Link>
    </div>
    <h4 className=" text-[12px] text-primary">{date}</h4>
</div>
    )
}