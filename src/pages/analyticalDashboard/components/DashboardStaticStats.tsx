import React, { ReactElement } from 'react';
import '../analyticalDashboard.css';

export function DashboardStaticStats(): ReactElement {
  return (
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div className="text-center text-[#777272] font-semibold font-mono">
            Overall Characters Chorded: 65
          </div>
        </div>
      </div>
      <svg
        id="grad"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="280px"
        height="280px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#D2DBFD" />
            <stop offset="50%" stop-color="#777272" />
            <stop offset="100%" stop-color="#5E5858" />
          </linearGradient>
        </defs>
        <circle id="circle1" cx="140" cy="140" r="130" stroke-linecap="round" />
      </svg>
    </div>
  );
}
