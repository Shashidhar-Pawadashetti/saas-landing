"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function Hero() {
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
      setTimeout(() => setSubmitted(false), 5000); // clear after 5 seconds
    }
  };

  return (
    <section ref={ref} className={`relative overflow-hidden bg-white dark:bg-slate-900 pt-24 pb-32 lg:pt-36 opacity-0 transition-colors duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          Manage your projects with <span className="text-indigo-600 dark:text-indigo-400">fluid precision</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-600 dark:text-slate-400 sm:text-xl">
          FlowDesk brings your team's tasks, timelines, and communications into one beautiful, lightning-fast workspace. Stop managing work about work.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[50px]">
          {submitted ? (
            <div className="rounded-md bg-green-50 dark:bg-green-500/10 px-6 py-3 border border-green-200 dark:border-green-500/30">
              <p className="text-sm font-medium text-green-800 dark:text-green-400">
                You're on the list! We'll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-x-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 dark:bg-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="Enter your email" 
              />
              <button 
                type="submit" 
                className="flex-none rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <div className="mx-auto max-w-5xl rounded-xl bg-slate-50/50 dark:bg-slate-800/80 p-2 sm:p-4 ring-1 ring-inset ring-slate-200 dark:ring-white/10 lg:rounded-2xl shadow-2xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div className="rounded-lg bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-200 dark:ring-white/10 overflow-hidden">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-red-400 dark:bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400 dark:bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400 dark:bg-green-500"></div>
                  <div className="ml-4 h-4 w-48 rounded bg-slate-100 dark:bg-slate-800"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">US</div>
                </div>
              </div>

              {/* Mockup Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Stats */}
                <div className="md:col-span-3 grid grid-cols-3 gap-4">
                  {[
                    { label: "Active Tasks", value: "142", trend: "+12%" },
                    { label: "Completed", value: "2,845", trend: "+5%" },
                    { label: "Team Velocity", value: "98.2", trend: "+1.2%" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 p-5 shadow-sm">
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <div className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full">{stat.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Mockup */}
                <div className="md:col-span-2 rounded-xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-6">Activity Overview</div>
                  <div className="flex items-end gap-2 h-48 mt-4">
                    {[40, 70, 45, 90, 65, 85, 100, 60, 30, 80, 55, 75].map((h, i) => (
                      <div key={i} className="w-full bg-indigo-50 dark:bg-indigo-500/10 relative rounded-t-sm group">
                        <div 
                          className="absolute bottom-0 w-full bg-indigo-500 dark:bg-indigo-400 rounded-t-sm transition-all duration-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300" 
                          style={{ height: `${h}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Task List Mockup */}
                <div className="md:col-span-1 border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm flex flex-col gap-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Recent Tasks</div>
                  {[
                    { text: "Update landing page copy", status: "Done" },
                    { text: "Design system review", status: "Review" },
                    { text: "Fix navigation bug", status: "In Progress" },
                    { text: "Deploy staging environment", status: "To Do" },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`h-4 w-4 rounded border flex items-center justify-center ${task.status === 'Done' ? 'bg-indigo-500 border-indigo-500 dark:bg-indigo-600 dark:border-indigo-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'}`}>
                           {task.status === 'Done' && <svg className="w-3 h-3 text-white m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                        <span className={`text-sm ${task.status === 'Done' ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300 font-medium'}`}>{task.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
