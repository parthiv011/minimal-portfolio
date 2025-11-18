import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export const Industries = () => {
  const industries = [
    {
      title: 'fintech Solutions',
      image: '/fin.jpg',
    },
    {
      title: 'Agentic AI',
      image: '/ai.jpg',
    },
    {
      title: 'E-commerce Solutions',
      image: '/ecom.jpg',
    },
  ];
  return (
    <div>
      <h2 className="font-machina my-4 font-bold">Industries I serve #</h2>
      <div className="grid grid-cols-3 gap-4">
        {industries.map((industry, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: 'easeInOut',
              }}
              className="group"
            >
              <Image
                src={industry.image}
                width={864}
                height={1080}
                alt={industry.title}
                className="aspect-square transition duration-200 group-hover:scale-[1.02]"
              />
              <h3 className="text-base font-bold tracking-tight text-gray-700 capitalize">
                {industry.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
