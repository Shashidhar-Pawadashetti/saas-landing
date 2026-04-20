"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function CtaSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const existing = JSON.parse(localStorage.getItem('waitlist') || '[]');
      if (!existing.includes(email)) {
        localStorage.setItem('waitlist', JSON.stringify([...existing, email]));
      }
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section ref={ref} className={`bg-indigo-600 dark:bg-indigo-900 py-24 sm:py-32 transition-colors duration-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100 dark:text-indigo-200">
            Join thousands of teams who have already upgraded their workflow. Stop paying for bloated software and try FlowDesk today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[50px]">
            {submitted ? (
              <div className="rounded-md bg-white/10 px-6 py-3 border border-white/20">
                <p className="text-sm font-medium text-white">
                  You're on the list! We'll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-x-3">
                <label htmlFor="cta-email" className="sr-only">Email address</label>
                <input 
                  id="cta-email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-3 text-slate-900 dark:text-white dark:bg-slate-800 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" 
                  placeholder="Enter your email" 
                />
                <button 
                  type="submit" 
                  className="flex-none rounded-md bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Sign up free
                </button>
              </form>
            )}
          </div>
          <p className="mt-4 text-xs text-indigo-200">14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
