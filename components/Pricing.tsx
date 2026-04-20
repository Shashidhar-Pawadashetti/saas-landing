"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for individuals and small projects.',
      features: [
        'Up to 3 projects',
        'Basic task management',
        '7-day activity log',
        'Community support',
        'Standard integrations',
      ],
      cta: 'Start for free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Ideal for growing teams needing advanced tools.',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Unlimited activity log',
        'Priority email support',
        'Premium integrations',
      ],
      cta: 'Get started with Pro',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$79',
      description: 'For large organizations with complex needs.',
      features: [
        'Everything in Pro',
        'Custom workflows',
        'Enterprise security',
        '24/7 phone support',
        'Dedicated success manager',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className={`bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32 transition-colors duration-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Choose the plan that fits your team's needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 gap-x-8 lg:max-w-7xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 transition-all duration-300 hover:shadow-xl ${
                tier.highlighted 
                  ? 'bg-white dark:bg-slate-800 ring-indigo-600 dark:ring-indigo-500 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20 lg:scale-105 z-10 relative' 
                  : 'bg-white/60 dark:bg-slate-800/60 ring-slate-200 dark:ring-white/10 hover:bg-white dark:hover:bg-slate-800'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-center text-xs font-semibold text-white shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className={`text-lg font-semibold leading-8 ${tier.highlighted ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">/mo</span>
              </p>
              <button
                className={`mt-8 w-full rounded-md px-3 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-500/30 hover:ring-indigo-300 dark:hover:ring-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'
                }`}
              >
                {tier.cta}
              </button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
