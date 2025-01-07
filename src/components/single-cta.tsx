"use client";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SingleCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative py-12 md:px-0 px-6 overflow-hidden my-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
        transition={{ duration: 0.5 }} // Transition settings
        className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-20 px-10"
      >
        <div className="flex flex-col lg:w-1/2 justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
            transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
            className="text-3xl md:text-6xl font-bold leading-snug"
          >
            Start Your Design <span className="text-primary">Journey</span>{" "}
            Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
            className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8"
          >
            Sign up now and experience the power of AI-driven design without any
            commitment.
          </motion.p>
          <div className="flex items-center justify-start gap-4">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={isInView ? { opacity: 1, scale: 1 } : {}} // Animation state
          transition={{ duration: 0.5, delay: 0.3 }} // Delay for staggered effect
          className="absolute bottom-[-45%] lg:bottom-[-32%] right-[-8%] overflow-hidden"
        >
          <img
            className="lg:w-[540px] w-[250px]"
            src="/cta-single-img.avif"
            alt="CTA Image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SingleCta;
