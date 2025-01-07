import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Hexagon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-800 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-12">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <Hexagon />
            <span className="font-semibold text-xl">Postly</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="/how-it-works" className="hover:underline text-lg">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline text-lg">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline text-lg">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline text-lg">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Separator className="my-4 bg-zinc-300 dark:bg-zinc-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Template by{" "}
            <Link target="_blank" href="https://postly.live">
              Postly.live
            </Link>{" "}
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline text-zinc-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline text-zinc-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
