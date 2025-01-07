"use client";
import React, { useState, useEffect } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James K.",
    image: "https://avatar.iran.liara.run/public/39",
    text: "I was skeptical at first, but this AI assistant exceeded all my expectations. It's easy to use and delivers professional-grade designs effortlessly.",
  },
  {
    id: 2,
    name: "Robert P.",
    image: "https://avatar.iran.liara.run/public/31",
    text: "What an amazing tool! The AI understands my needs perfectly and helps me create stunning designs in no time. My productivity has doubled!",
  },
  {
    id: 3,
    name: "William M.",
    image: "https://avatar.iran.liara.run/public/32",
    text: "I love how this AI-powered assistant blends technology and creativity. It's a must-have for any designer looking to streamline their workflow and produce top-notch work.",
  },
  {
    id: 4,
    name: "John D.",
    image: "https://avatar.iran.liara.run/public/35",
    text: "Using this AI-powered tool has completely transformed how I approach my projects. It delivers professional designs consistently. Highly recommend it!",
  },
];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setStartIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          Customer Success <span className="text-primary">Stories</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
          Discover how our platform has helped businesses create outstanding
          content effortlessly. Hear directly from our users about their success
          and satisfaction.
        </p>
        <div className="flex items-center justify-end my-8 gap-4">
          <Button
            size="icon"
            onClick={prevSlide}
            className="rounded-full transition-colors"
            disabled={isAnimating}
          >
            <MoveLeft className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            onClick={nextSlide}
            className="rounded-full transition-colors"
            disabled={isAnimating}
          >
            <MoveRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}
        >
          {testimonials
            .concat(testimonials.slice(0, 3))
            .map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-zinc-200 dark:bg-zinc-800 p-6 rounded-lg h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <h2 className="font-medium text-lg">{testimonial.name}</h2>
                  </div>
                  <p className="text-secondary-content">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
