import React, { ReactElement } from 'react';
import {
  AnalyticalDashboardPageContainer,
  TopSectionContainer,
  WelcomeMessage,
  StaticStats,
} from './analyticalDashboard.styled';
import { AnalyticalDashboardHeader } from './components/AnalyticalDashboardHeader.tsx';
/**
 * This is the analytical dashboard page. It is responsible for displaying all user-specific stats.
 * The styled components for this page are located in the analyticalDashboard.styled.tsx file in the same directory.
 */

const AnalyticalDashboard = (): ReactElement => {
  React.useEffect(() => {
    document.title = 'dot i/o Dashboard';
  }, []);

  const user = "Jane's";

  return (
    <React.Fragment>
      <AnalyticalDashboardPageContainer>
        <TopSectionContainer>
          {/*  <div className="flex flex-wrap w-full mb-20">
              <WelcomeMessage>Welcome to {user} Dashboard!</WelcomeMessage>
            </div> */}
          <AnalyticalDashboardHeader />

          <StaticStats />
        </TopSectionContainer>
      </AnalyticalDashboardPageContainer>
    </React.Fragment>
  );
};

export default AnalyticalDashboard;
