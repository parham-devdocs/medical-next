import React from "react";
import { Avatar ,AvatarImage} from "../ui/avatar";
import { Comment } from "@/types"

const CommentCard = ({ comment, image, commentator, date }:Comment) => {
  
  return (
    <div
      className={`bg shadow-md px-10 py-6   overflow-hidden  bg-helper1-Default w-full sm:w-3/4   `}
    >
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={image} // Use empty string if no image
            alt={"avatar fo commentator"} // Use name as alt text
          />
        </Avatar>
        <h4>{commentator}</h4>
        <h4>{date}</h4>
      </div>
      <p className=" line-clamp-3">{comment}</p>
    </div>
  );
};

export default CommentCard;
