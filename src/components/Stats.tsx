import React, { useEffect, useState } from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="inline-block mx-8 mb-4 text-center transition-all duration-700 ease-in-out">
    <div className="text-4xl font-bold text-[#2699FB] block">{number}</div>
    <div className="text-base font-semibold text-black mt-2">{label}</div>
  </div>
);

const Stats = () => {
  const sellingStats = [
    { number: "20k+", label: "Verified Businesses Registered" },
    { number: "50k+", label: "Products & Services Listed" },
    { number: "5k+", label: "Daily New Signups" },
  ];

  const growingStats = [
    { number: "3X Faster", label: "Growth With Verified Badge" },
    { number: "70%", label: "Businesses See Sales Boost in 90 Days" },
    { number: "100+", label: "Industries Served" },
  ];

  const sellingDescription =
    "Create your business profile and launch your digital store in minutes. DemoApp makes onboarding seamless, so you can showcase products, manage sales, and start reaching customers without technical hassle.";

  const growingDescription =
    "DemoApp gives you tools to market smarter, track performance, and scale efficiently. From ads to analytics, we help businesses gain visibility, attract loyal customers, and unlock multiple revenue streams.";

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const statsData = activeIndex === 0 ? sellingStats : growingStats;
  const description = activeIndex === 0 ? sellingDescription : growingDescription;

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 text-center relative overflow-hidden">
     
      <div
        key={activeIndex}
        className="transition-opacity duration-1000 ease-in-out opacity-100 animate-fade"
      >
  
        <div className="flex flex-wrap justify-evenly items-start">
          {statsData.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        <p className=" max-w-6xl mx-auto text-left mx-auto mt-4 text-lg text-gray-600 leading-relaxed transition-all duration-1000 ease-in-out">
          {description}
        </p>
      </div>

      {/* Static Footer Text */}
      <div className="mt-10 text-left">
        <h2 className="text-2xl font-bold text-gray-800">
          From <span className="text-blue-500">Home-Based Sellers to Global Suppliers—</span>
        </h2>
        <p className="text-2xl font-bold text-gray-800">
          Real Businesses Growing Every Day
        </p>
      </div>
    </section>
  );
};

export default Stats;
