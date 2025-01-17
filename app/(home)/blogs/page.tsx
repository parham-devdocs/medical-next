import Container from "@/components/common/container";
import Header from "@/components/common/header";
import React from "react";
import BlogCard from "@/components/common/Card";
import { fetchPosts } from "@/lib/api";
import Pagination from "@/components/common/pagination";
import { Post } from "@/types";

type HomeProps = {
  searchParams: { [key: string]: string | undefined };
};

const blogPage = async ({ searchParams }: HomeProps) => {
  const { page = 1, pageSize = 10 } = searchParams; // Default values
  const currentPage = parseInt((page as string) || "1");
  const postsPerPage = parseInt((pageSize as string) || "10");

  const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);
  console.log(currentPage);
  console.log(postsPerPage);
  return (
    <Container>
      <Header>Blogs</Header>
      <section className="flex flex-wrap items-center gap-6 justify-center">
        {posts.map((d: Post) => (
          <div key={d.id} className="">
            <BlogCard
              title={d.title}
              image={"/heart.jpg"}
              content={d.body}
              buttonLink={`/blogs/${d.id}`}
            />
          </div>
        ))}
      </section>
      <Pagination
        totalCount={totalPosts}
        pageSize={postsPerPage}
        page={currentPage}
      />
    </Container>
  );
};

export default blogPage;
