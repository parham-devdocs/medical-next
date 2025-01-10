"use client";
import { Comment } from "@/types";
import React from "react";
import CommentCard from "../commentCard";
import { motion } from "framer-motion";
import Header from "../header";
import LineChart from "@/components/charts/line";
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
    <div className="flex flex-col lg:flex-row   bg-background justify-between gap-16">
      {/* Left Section */}
      <div className="flex-1 flex justify-center flex-col gap-8 ">
        <Header> What Others Say About Us</Header>
        {comments.map(
          (
            comment,
            index // Corrected destructuring
          ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: [1, 1.1, 0.9, 1] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.7, duration: 1 }} // Fixed delay calculation
            >
              <CommentCard
                comment={comment.comment}
                commentator={comment.commentator}
                image={comment.image}
                date={comment.date}
              />
            </motion.div>
          )
        )}
      </div>

      {/* Right Section */}
      <div className="flex-1 ">
        <Header>Our Performance Metrics </Header>
        <motion.div className="  items-center mt-4 "  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} >
        <LineChart />

        </motion.div>
        
      </div>
    </div>
  );
};

export default PatientsReviews;
