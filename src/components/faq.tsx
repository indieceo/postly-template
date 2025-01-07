"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Faq = () => {
  const faq = [
    {
      title: "How does the AI generate designs?",
      description:
        "Our AI analyzes your design brief and uses advanced algorithms to generate multiple design concepts tailored to your specifications. It takes into account your preferences, style, and project requirements to deliver unique and high-quality designs.",
    },
    {
      title: "Can I customize the AI-generated designs?",
      description:
        "Yes, our platform includes powerful customization tools that allow you to refine and perfect your chosen designs. You can make adjustments, add elements, and tweak details to ensure the final design matches your vision.",
    },
    {
      title: "What support options are available?",
      description:
        "We offer comprehensive support for all our plans. Starter users have access to email support, Pro users benefit from priority email support, and Enterprise users receive 24/7 priority support along with a dedicated account manager.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Yes, we offer a 14-day free trial for all new users. You can explore all the features of our AI-powered design assistant and see how it can enhance your creative process before committing to a subscription.",
    },
    {
      title: "How secure is my data?",
      description:
        "We prioritize the security of your data. All your designs and project details are stored in secure cloud storage with advanced encryption. Enterprise users have access to enhanced security options for added peace of mind.",
    },
    {
      title: "What integrations are available?",
      description:
        "Our platform seamlessly integrates with popular design and project management tools such as Adobe Creative Suite, Figma, and Trello. This allows you to streamline your workflow and easily incorporate our AI-powered design assistant into your existing processes.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-12 md:px-0 px-6 overflow-hidden mt-20">
      <div className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-semibold leading-snug">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8">
              Have questions about our AI-Powered Design Assistant? Find answers
              to the most common questions and learn how our platform can
              enhance your creative process.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-12 lg:py-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }} // Initial state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation state
              transition={{ duration: 0.5 }} // Transition settings
            >
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem
                    value={`item-${index + 1}`}
                    key={index}
                    className="py-4 border-b border-zinc-300 dark:border-zinc-700"
                  >
                    <AccordionTrigger className="text-md font-bold text-start">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>{item.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
