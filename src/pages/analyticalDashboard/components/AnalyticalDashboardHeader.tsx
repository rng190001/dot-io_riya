import React, { ReactElement } from 'react';

export function AnalyticalDashboardHeader(): ReactElement {
  const user = "Jane's";
  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white font-mono"></h1>
      </div>
      <p className="pt-5 lg:w-96 h-50 text-center leading-relaxed text-4xl text-gray-300 font-medium font-mono">
        Welcome to {user} Dashboard!
        <div className=""></div>
      </p>
    </div>
  );
}
