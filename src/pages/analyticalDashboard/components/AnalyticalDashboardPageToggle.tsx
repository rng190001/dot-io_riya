import React, { ReactElement } from 'react';
import styled from 'styled-components';

export function AnalyticalDashboardPageToggle(): ReactElement {
  return (
    <div>
      <WordPageContainer>
        <PageTextOverall>
          <HoverOverall>Overall</HoverOverall>
        </PageTextOverall>
        <PageTextMod>
          <HoverMod>Module</HoverMod>
        </PageTextMod>
      </WordPageContainer>
      <div className="pl-24">
        <div className="w-[1080px] h-px border-2 border-zinc-300"></div>
      </div>
    </div>
  );
}

const WordPageContainer = styled.div.attrs({
  className: `flex flex-row space-x-96 pl-72 pb-3`,
})``;

const PageTextOverall = styled.div.attrs({
  className: `text-white text-4xl font-normal font-mono`,
})``;

const PageTextMod = styled.div.attrs({
  className: `text-gray-300 text-3xl font-normal font-mono`,
})``;

const HoverOverall = styled.div`
  &:hover {
    color: #d1d5db;
    transition: 0.3s ease in;
  }
`;

const HoverMod = styled.div`
  &:hover {
    color: white;
    transition: 0.3s ease in;
  }
`;
