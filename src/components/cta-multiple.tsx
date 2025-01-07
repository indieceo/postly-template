"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CtaMultiple = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-32">
          <motion.div
            ref={ref}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                High-Resolution Outputs
              </h2>
              <p className="max-w-lg my-5">
                Download your final designs in high-resolution formats suitable
                for print and digital use. Ensure your work looks professional
                and polished in any medium.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img className="h-[471px]" src="cta-multiple-1.avif" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-2/3"
            >
              <img className="h-[471px]" src="cta-multiple-2.avif" />
            </motion.div>
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                Real-Time Collaboration
              </h2>
              <p className="max-w-lg my-5">
                Seamlessly collaborate with your team in real-time. Share ideas,
                give feedback, and make edits together, no matter where you are.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                Advanced Scheduling Tools
              </h2>
              <p className="max-w-lg my-5">
                Plan and schedule your design projects with ease. Use our
                scheduling tools to set deadlines, track milestones, and ensure
                timely delivery of your design work.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img className="h-[471px]" src="cta-multiple-3.avif" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CtaMultiple;
