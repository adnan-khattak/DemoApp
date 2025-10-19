import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

interface StatsProps {
  variant?: 'selling' | 'growing';
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
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
    <section className="stats">
      {statsData.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
      <p className="stats-description">{description}</p>
    </section>
  );
};

export default Stats;