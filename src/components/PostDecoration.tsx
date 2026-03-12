"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pictoPost from "@/assets/images/brand/decoration-color/PINTOGRAMA-05.svg";
import pictoPost2 from "@/assets/images/brand/decoration-color/PINTOGRAMA-06.svg";

export default function PostDecoration() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 15 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 -left-10 md:left-4 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoPost}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -15 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 -right-10 md:right-4 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoPost2}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>
    </>
  );
}
