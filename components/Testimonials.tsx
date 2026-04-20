"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      body: "FlowDesk has completely transformed how our engineering team operates. We save hours every week just by keeping conversations and tasks in the same context.",
      author: "Sarah Jenkins",
      role: "CTO at TechNova",
      initials: "SJ",
      color: "bg-blue-100 text-blue-700"
    },
    {
      body: "The analytics are incredibly deep yet easy to understand. We finally have a bird's-eye view of our agency's capacity without running messy spreadsheets.",
      author: "Marcus Chen",
      role: "Operations Director",
      initials: "MC",
      color: "bg-purple-100 text-purple-700"
    },
    {
      body: "I've tried almost every project management tool out there. FlowDesk is the first one that my team actually enjoys using every day. It's blazing fast.",
      author: "Elena Rodriguez",
      role: "Product Manager",
      initials: "ER",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section ref={ref} className={`bg-white dark:bg-slate-900 py-24 sm:py-32 transition-colors duration-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Loved by builders everywhere
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-slate-900 dark:text-white sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-200 dark:ring-white/10 transition-all hover:shadow-md hover:ring-indigo-100 dark:hover:ring-indigo-500/30 flex flex-col justify-between">
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                "{testimonial.body}"
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg ${testimonial.color} dark:bg-opacity-20 dark:text-opacity-90`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
