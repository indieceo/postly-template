"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Upload } from "lucide-react";

const Discover = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          Unleash Your <span className="text-primary">Creativity</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
          Discover how our AI-Powered Design Assistant transforms your ideas
          into stunning designs effortlessly. Follow these simple steps to turn
          your vision into reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <motion.div
            ref={ref}
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-primary w-fit p-4 rounded-full">
              <Upload className="text-white" />
            </div>
            <h3 className="text-4xl mt-10">Upload Brief</h3>
            <p className="mt-2 leading-tight mb-4">
              Share your project details and let our AI grasp your vision.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-primary w-fit p-4 rounded-full">
              <Sparkles className="text-white" />
            </div>
            <h3 className="text-4xl mt-10">Generate Designs</h3>
            <p className="mt-2 leading-tight mb-4">
              Watch as our AI crafts unique design ideas tailored to you.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col p-6 bg-zinc-200 dark:bg-zinc-800 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-primary w-fit p-4 rounded-full">
              <Rocket className="text-white" />
            </div>
            <h3 className="text-4xl mt-10">Refine Creation</h3>
            <p className="mt-2 leading-tight mb-4">
              Perfect your chosen concept with easy-to-use AI tools.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
