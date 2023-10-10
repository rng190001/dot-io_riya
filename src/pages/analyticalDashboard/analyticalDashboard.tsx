import React, { ReactElement } from 'react';
import {
  AnalyticalDashboardPageContainer,
  TopSectionContainer,
  WelcomeMessage,
  StaticStats,
} from './analyticalDashboard.styled';
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
    <AnalyticalDashboardPageContainer>
      <TopSectionContainer>
        <WelcomeMessage>Welcome to {user} Dashboard!</WelcomeMessage>
        <StaticStats />
      </TopSectionContainer>
    </AnalyticalDashboardPageContainer>
  );
};

export default AnalyticalDashboard;
