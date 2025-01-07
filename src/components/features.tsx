"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { MoveUpRight } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          Transforming Imagination into{" "}
          <span className="text-primary">Reality</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
          Unlock the full potential of your creativity with our AI-powered
          design assistant. Explore new dimensions of design, from futuristic
          visuals to timeless craftsmanship, and witness how AI can turn your
          wildest ideas into stunning realities.
        </p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-10"
        >
          <motion.div
            className="lg:col-span-2 h-[324px] hover:text-white hover:bg-primary dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <p className="leading-tight">
                  Dive into the world of AI where design possibilities are
                  limitless. Let the cutting-edge technology transform your
                  concepts into breathtaking visuals.
                </p>
                <div className="group-hover:bg-white bg-primary w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Witness the Future</h3>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-3 h-[324px] hover:text-white hover:bg-primary dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <div className="leading-tight w-full">
                  <p className="max-w-md">
                    Step beyond the ordinary with designs that defy conventions.
                    Our AI conjures up imaginative visuals that push the
                    boundaries of creativity.
                  </p>
                </div>
                <div className="group-hover:bg-white bg-primary w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Visualize the Impossible</h3>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 h-[324px] hover:text-white hover:bg-primary dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <div className="leading-tight w-full">
                  <p className="max-w-md">
                    Experience the perfect blend of form and function. Our AI
                    ensures that every design not only looks stunning but also
                    serves its purpose flawlessly.
                  </p>
                </div>
                <div className="group-hover:bg-white bg-primary w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Synergy and Style</h3>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-2 h-[324px] hover:text-white hover:bg-primary dark:hover:bg-primary rounded-2xl p-6 dark:bg-zinc-800 bg-zinc-200 group"
            variants={animationVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <p className="leading-tight">
                  Embrace the elegance of meticulously crafted designs. Our AI
                  polishes every detail to bring a timeless quality to your
                  creative projects.
                </p>
                <div className="group-hover:bg-white bg-primary w-fit p-3 h-fit rounded-full">
                  <MoveUpRight className="text-white group-hover:text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-[500]">Timeless Precision</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
