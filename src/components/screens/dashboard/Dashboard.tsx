import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectLog, selectMetrics, selectState } from '../../../store/selectors/user';
import { AppDispatch } from '../../../App';
import { getMetrics } from '../../../store/actions/user';
import { State } from '../../../store';
import { RequestState } from '../../../store/reducers/common';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const log = useSelector(selectLog);
  const metrics = useSelector(selectMetrics);
  const state = useSelector(selectState);

  const queries = useSelector((state: State) => state.userReducer.queries);
  const results = useSelector((state: State) => state.userReducer.results);
  const select = useSelector((state: State) => state.userReducer.select);
  const selectWhere = useSelector((state: State) => state.userReducer.selectWhere);
  const selectLeftJoin = useSelector((state: State) => state.userReducer.selectLeftJoin);

  useEffect(() => {
    dispatch(getMetrics());
  }, []);

  return (
    <MainWrapper>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
          <>
            <Metrics>
              <Div>
                <Title>Worker</Title>
                <Paragraph>Colo: {metrics?.colo}</Paragraph>
                <Paragraph>Country: {metrics?.country}</Paragraph>
              </Div>
              <Div>
                <Title>SQL Metrics</Title>
                <Paragraph>Query count: {queries}</Paragraph>
                <Paragraph>Results count: {results}</Paragraph>
                <Paragraph># SELECT: {select}</Paragraph>
                <Paragraph># SELECT WHERE: {selectWhere}</Paragraph>
                <Paragraph># SELECT LEFT JOIN: {selectLeftJoin}</Paragraph>
              </Div>
            </Metrics>
            <WrapLog>
              <Title>Activity log</Title>
              <ParagraphLog>Explore the app and see metrics here</ParagraphLog>
              {
                log && log.map((obj: any, index: number) => (
                  <Div key={index}>
                    <Info>{obj.duration}</Info>
                    <Log>{obj.query}</Log>
                  </Div>
                ))
              }
            </WrapLog>
          </>
      }
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding: 48px;
  margin: 56px 0 0;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  word-break: break-all;
`;

export default Dashboard;
