"use client";
import { Comment } from "@/types";
import React from "react";
import CommentCard from "../commentCard";
import { motion } from "framer-motion";

const PatientsReviews = () => {
  const comments: Comment[] = [
    {
      image: "/heroPic.png",
      comment:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia vestibulum parturient duis torquent habitasse. Nisl torquent praesent torquent eu tempor volutpat quam curae. Nisl sociosqu convallis viverra eros habitant feugiat cursus. Porta rutrum pulvinar vehicula auctor duis interdum netus erat inceptos. Senectus curae vel torquent consectetur vel sem cubilia aptent posuere. Lorem donec eros metus condimentum leo cras.",
      commentator: "mike pensy",
      date: new Date().toLocaleDateString(),
    },
    {
      image: "/heroPic.png",
      comment:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia vestibulum parturient duis torquent habitasse. Nisl torquent praesent torquent eu tempor volutpat quam curae. Nisl sociosqu convallis viverra eros habitant feugiat cursus. Porta rutrum pulvinar vehicula auctor duis interdum netus erat inceptos. Senectus curae vel torquent consectetur vel sem cubilia aptent posuere. Lorem donec eros metus condimentum leo cras.",
      commentator: "mike pensy",
      date: new Date().toLocaleDateString(),
    },
    {
      image: "/heroPic.png",
      comment:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia vestibulum parturient duis torquent habitasse. Nisl torquent praesent torquent eu tempor volutpat quam curae. Nisl sociosqu convallis viverra eros habitant feugiat cursus. Porta rutrum pulvinar vehicula auctor duis interdum netus erat inceptos. Senectus curae vel torquent consectetur vel sem cubilia aptent posuere. Lorem donec eros metus condimentum leo cras.",
      commentator: "mike pensy",
      date: new Date().toLocaleDateString(),
    },
    // ... other comments
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-[90vh] py-4 border-l-2 border-dashed border-primary mt-2 bg-background">
      {/* Left Section */}
      <div className="flex-1 flex justify-center flex-col gap-8 p-8">
        {comments.map(
          (
            comment,
            index // Corrected destructuring
          ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .7 }}
                    whileInView={{ opacity: 1,scale: [1, 1.1, 0.9, 1] }}
                    viewport={{once:true}}
              transition={{ delay: index * 0.7, duration: 1 }} // Fixed delay calculation
            >
              <CommentCard
                comment={comment.comment}
                commentator={comment.commentator}
                image={comment.image}
                date={comment.date}
                // className="w-full sm:w-1/2 lg:w-1/3" // Adjust column width as needed
              />
                  
            </motion.div>
          )
        )}
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gray-800 p-8">
        {/* Content for the right section goes here */}
      </div>
    </div>
  );
};

export default PatientsReviews;
