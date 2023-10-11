import styled from 'styled-components';
import './analyticalDashboard.css';

export const AnalyticalDashboardPageContainer = styled.section.attrs({
  className: `text-white body-font min-h-screen bg-[#222424]`,
})``;

export const TopSectionContainer = styled.div.attrs({
  className: `container px-5 py-12 mx-auto`,
})``;

export const WelcomeMessage = styled.div.attrs({
  className: `lg:w-1/2 w-full leading-relaxed text-white font-semibold font-mono`,
})``;

export const StaticStats = styled.div.attrs({
  className: `ring-4 ring-gradient from-blue-500 to-blue-600`,
  //className: `w-16 h-16 flex items-center justify-center rounded-full custom-ring`,
})``;
