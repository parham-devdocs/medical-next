"use client";
import { motion } from "framer-motion";
import Header from "../header";
import Card from "@/components/common/Card";

// Sample blogs array with medical articles
const blogs = [
  {
    id: 1,
    title: "Understanding Diabetes",
    image: "/diabetes.jpg",
    content:
      "Diabetes is a chronic condition that occurs when the body cannot produce enough insulin or cannot use insulin effectively. This leads to high blood sugar levels, which can cause serious health complications if not managed properly. Understanding diabetes is crucial for effective management and prevention of related health issues.",
  },
  {
    id: 2,
    title: "The Importance of Vaccinations",
    image: "/vaccination.jpg",
    content:
      "Vaccinations are essential for preventing infectious diseases. They help build immunity in individuals and protect communities by reducing the spread of viruses. Vaccines have been crucial in eradicating diseases like smallpox and significantly reducing the incidence of others, making public health a priority.",
  },
  {
    id: 3,
    title: "Nutrition for a Healthy Heart",
    image: "/heart.jpg",
    content:
      "A heart-healthy diet is vital for maintaining cardiovascular health. Consuming a variety of fruits, vegetables, whole grains, and lean proteins can help reduce the risk of heart disease. Additionally, limiting saturated fats, sodium, and added sugars is important for overall heart health and wellness.",
  },
];

const PopularArticles = () => {
  return (
    <div>
      <Header>Popular Blogs</Header>
      <motion.div className="flex flex-col lg:flex-row bg-background w-full justify-between items-center gap-16">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id} // Moved key prop here
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: [1, 1.1, 0.9, 1] }}
            viewport={{ once: true }}
            transition={{ delay: blog.id * 0.2, duration: 1 }} // Fixed delay calculation
          >
            <Card
              title={blog.title}
              image={blog.image}
              content={blog.content}
              buttonLink={`/blogs/${blog.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularArticles;
