import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

interface StatsProps {
  variant?: 'selling' | 'growing';
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="inline-block mx-8 mb-4 text-center">
    <div className="text-4xl font-bold text-[#2699FB] block">{number}</div>
    <div className="text-base font-bold text-black mt-2">{label}</div>
  </div>
);

const Stats = ({ variant = 'selling' }: StatsProps) => {
  const statsData = variant === 'selling'
    ? [
        { number: '20k+', label: 'Verified Businesses Registered' },
        { number: '50k+', label: 'Products & Services Listed' },
        { number: '5k+', label: 'Daily New Signups' }
      ]
    : [
        { number: '3X Faster', label: 'Growth With Verified Badge' },
        { number: '70%', label: 'Businesses See Sales Boost in 90 Days' },
        { number: '100+', label: 'Industries Served' }
      ];

  const description = variant === 'selling'
    ? 'Create your business profile and launch your digital store in minutes. DemoApp makes onboarding seamless, so you can showcase products, manage sales, and start reaching customers without technical hassle.'
    : 'DemoApp gives you tools to market smarter, track performance, and scale efficiently. From ads to analytics, we help businesses gain visibility, attract loyal customers, and unlock multiple revenue streams.';

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 text-center">
      {statsData.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
      <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">{description}</p>
      <h2 className="text-left text-2xl font-bold text-gray-800 ">
        From <span className="text-blue-500">Home-Based Sellers to Global Suppliers—</span> 
      </h2>
      <p className="text-left text-2xl font-bold text-gray-800">Real Businesses Growing Every Day</p>
    </section>
  );
};

export default Stats;