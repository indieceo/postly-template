"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className="relative py-10 md:px-0 px-6 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-24 lg:py-36 px-10"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col lg:w-2/3 justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl md:text-7xl font-bold leading-snug"
            variants={itemVariants}
          >
            Your AI-Powered <span className="text-primary">Design</span>{" "}
            Assistant
          </motion.h1>
          <motion.p
            className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8"
            variants={itemVariants}
          >
            Unlock your creative potential. Seamlessly generate, customize, and
            perfect your designs with cutting-edge AI technology.
          </motion.p>
          <motion.div
            className="flex items-center justify-start gap-4"
            variants={itemVariants}
          >
            <Button size="lg">Get Started</Button>
            <Link
              target="_blank"
              href="https://postly.live"
              className="hover:underline"
            >
              Go to Postly.live 
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-[-45%] lg:bottom-[-32%] right-[-8%] overflow-hidden"
          variants={itemVariants}
        >
          <img className="lg:w-[610px] w-[250px]" src="/hero-img.png" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
