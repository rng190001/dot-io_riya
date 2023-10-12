import React, { ReactElement } from 'react';
import {
  AnalyticalDashboardPageContainer,
  TopSectionContainer,
} from './analyticalDashboard.styled';
import { AnalyticalDashboardHeader } from './components/AnalyticalDashboardHeader';
import { AnalyticalDashboardPageToggle } from './components/AnalyticalDashboardPageToggle';

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
          <AnalyticalDashboardPageToggle />
          <AnalyticalDashboardHeader />
        </TopSectionContainer>
      </AnalyticalDashboardPageContainer>
    </React.Fragment>
  );
};

export default AnalyticalDashboard;
