import React, { ReactElement } from 'react';
import {
  AnalyticalDashboardPageContainer,
  TopSectionContainer,
  WelcomeMessage,
} from './analyticalDashboard.styled';
import { AnalyticalDashboardHeader } from './components/AnalyticalDashboardHeader';
import { DashboardStaticStats } from './components/DashboardStaticStats';

/**
 * This is the analytical dashboard page. It is responsible for displaying all user-specific stats.
 * The styled components for this page are located in the analyticalDashboard.styled.tsx file in the same directory.
 */

const AnalyticalDashboard = (): ReactElement => {
  React.useEffect(() => {
    document.title = 'dot i/o Dashboard';
  }, []);

  return (
    <React.Fragment>
      <AnalyticalDashboardPageContainer>
        <TopSectionContainer>
          {/*  <div className="flex flex-wrap w-full mb-20">
              <WelcomeMessage>Welcome to {user} Dashboard!</WelcomeMessage>
            </div> */}
          <AnalyticalDashboardHeader />
          <div className="flex flex-row space-x-72">
            <DashboardStaticStats />
            <DashboardStaticStats />
            <DashboardStaticStats />
          </div>
        </TopSectionContainer>
      </AnalyticalDashboardPageContainer>
    </React.Fragment>
  );
};

export default AnalyticalDashboard;
