import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectStats } from '../../../store/selectors/user';

const Dashboard = () => {
  const stats = useSelector(selectStats);

  return (
    <MainWrapper>
      <Metrics>
        <Div>
          <Title>Worker</Title>
          <Paragraph>Colo: </Paragraph>
          <Paragraph>Country: </Paragraph>
        </Div>
        <Div>
          <Title>SQL Metrics</Title>
          <Paragraph>Query count:</Paragraph>
          <Paragraph>Results count:</Paragraph>
          <Paragraph># SELECT:</Paragraph>
          <Paragraph># SELECT WHERE:</Paragraph>
          <Paragraph># SELECT LEFT JOIN:</Paragraph>
        </Div>
      </Metrics>
      <WrapLog>
        <Title>Activity log</Title>
        <ParagraphLog>Explore the app and see metrics here</ParagraphLog>
        <Div>
          <Info>2023-03-17T22:21:24.092Z, SinglePrimary-cf5c58b0-e2c3-46e2-b128-37eecde77a08.db3, 3.781124999979511ms</Info>
          <Log>SELECT COUNT(1) as total FROM Supplier</Log>
        </Div>
      </WrapLog>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding: 48px;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 1rem;
`;

const Div = styled.div``;

const Title = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Paragraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(31 41 55);
`;

const WrapLog = styled.div`
  margin: 24px 0 0;
`;

const ParagraphLog = styled(Paragraph)`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Info = styled.p`
  margin: 8px 0 0;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(156 163 175);
`;

const Log = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  word-break: break-all;
`;

export default Dashboard;
