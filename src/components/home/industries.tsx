'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export const Industries = () => {
  const industries = [
    {
      title: 'MVP Development',
      image: '/mvp.jpg',
      items: [
        'Micro-SaaS',
        'API design & integration',
        'User onboarding flows',
        'Lightweight backend systems',
      ],
    },
    {
      title: 'Fintech Solutions',
      image: '/fin.jpg',
      items: [
        'Asset Management',
        'Portfolio Dashboards',
        'Transaction, Wallets & payout modules',
        'RBAC | ABAC',
      ],
    },
    {
      title: 'Agentic AI',
      image: '/ai.jpg',
      items: [
        'AI automation for daily tasks ',
        'Email & proposal generation agents',
        'Workflow Integrations',
        'LLM chatbots',
      ],
    },
    {
      title: 'E-commerce Solutions',
      image: '/ecom.jpg',
      items: [
        'Inventory Automation',
        'Order Management',
        'Storefront Development',
        'Dynamic filtering systems',
      ],
    },
    {
      title: 'Custom Development',
      image: '/custom.jpg',
      items: [
        'MVP development & rapid prototyping',
        'Multi-tenant SaaS backend architecture',
        'Admin dashboards & analytics',
        'Authentication, roles & billing modules',
      ],
    },
  ];

  return (
    <div>
      <h2 className="font-machina my-4 font-bold">Industries I serve #</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.32,
              delay: idx * 0.08,
              ease: 'easeInOut',
            }}
            className="group relative cursor-pointer overflow-hidden shadow-sm"
          >
            <div className="relative w-full pb-[100%]">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="z-0 object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 z-10 bg-black/40 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100"
            />
            <h3 className="absolute top-3 left-3 z-20 text-lg font-bold text-white drop-shadow-md">
              {industry.title}
            </h3>
            <ul className="absolute bottom-3 left-3 z-20 max-w-[70%] translate-y-0 list-disc space-y-1 pl-4 text-sm text-white opacity-100 transition-all duration-300 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              {industry.items.map((item, i) => (
                <li key={i} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
