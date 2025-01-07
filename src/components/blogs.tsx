"use client";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Apr 8, 2022",
      readTime: "6 min read",
      title: "Starting and Growing a Career in Web Design",
      image: "/blog-img-1.avif",
    },
    {
      id: 2,
      date: "Mar 15, 2022",
      readTime: "5 min read",
      title: "Create a Landing Page That Performs Great",
      image: "/blog-img-2.avif",
    },
    {
      id: 3,
      date: "Feb 28, 2022",
      readTime: "7 min read",
      title: "How Can Designers Prepare for the Future?",
      image: "/blog-img-3.avif",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
          transition={{ duration: 0.5 }} // Transition settings
          className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug"
        >
          Stay Inspired with Our Latest{" "}
          <span className="text-primary">Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
          transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
          className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight"
        >
          Dive into our blog for the latest trends, tips, and insights in the
          world of design and AI technology. Whether you’re looking for
          inspiration, tutorials, or industry news, our articles are crafted to
          keep you informed and inspired.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
              className="dark:bg-zinc-800 bg-zinc-200 rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="my-6 flex justify-center items-center">
          <Button size="lg">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
