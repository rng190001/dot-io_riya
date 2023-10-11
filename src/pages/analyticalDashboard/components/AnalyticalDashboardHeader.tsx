import React, { ReactElement } from 'react';

export function AnalyticalDashboardHeader(): ReactElement {
  const user = "Jane's";
  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white font-mono"></h1>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-300 font-semibold font-mono">
        Welcome to {user} Dashboard!
        <div className=""></div>
      </p>
    </div>
  );
}
