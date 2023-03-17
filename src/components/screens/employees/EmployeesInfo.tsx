import React, { useEffect } from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { deleteKeys } from '../../../utils/deleteKeys';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { selectEmployee, selectProduct, selectState } from '../../../store/selectors/user';
import { getEmployeeInfo, getProductInfo } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { RequestState } from '../../../store/reducers/common';

const EmployeesInfo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const employee = useSelector(selectEmployee);
  const state = useSelector(selectState);

  const id = Number(useParams().id);

  useEffect(() => {
    if (!employee) {
      dispatch(getEmployeeInfo(id));
    }
  }, [])

  const infoLeftTitles = ['Name', 'Title', 'Title Of Courtesy', 'Birth Date', 'Hire Date', 'Address', 'City'];
  const infoRightTitles = ['Postal Code', 'Country', 'Home Phone', 'Extension', 'Notes', 'Reports To'];

  const leftData = () => {
    return {
      full_name: employee?.full_name,
      title: employee?.title,
      title_of_courtesy: employee?.title_of_courtesy,
      birth_date: employee?.birth_date,
      hire_date: employee?.hire_date,
      address: employee?.address,
      city: employee?.city,
    }
  };

  const rightData = () => {
    return {
      postal_code: employee?.postal_code,
      country: employee?.country,
      home_phone: employee?.home_phone,
      extension: employee?.extension,
      notes: employee?.notes,
      report_full_name: employee?.report_full_name,
    }
  };

  const onButtonClick = () => {
    nav(Path.Employees)
  }

  const goTo = (index: number) => {
    if (index === 5) {
      nav(`${Path.Employees}/${employee?.report_employee_id}`);
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
          <Table>
            <Header>
              <BallotIcon />
              <Title>Employee information</Title>
            </Header>
            <InfoWrap>
              <LeftWrap>
                {
                  infoLeftTitles.map((title, index: number) => {
                    const value: any = Object.values(leftData())[index];
                    return (
                      <Info key={index}>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoValue>{value}</InfoValue>
                      </Info>
                    )
                  })}
              </LeftWrap>
              <RightWrap>
                {
                  infoRightTitles.map((title, index: number) => {
                    const value: any = Object.values(rightData())[index];
                    if (value === null || value === ' ') {
                      title = ''
                    }
                    return (
                      <Info key={index}>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoValue
                          isColored={index === 5}
                          onClick={() => goTo(index)}
                        >
                          {value}
                        </InfoValue>
                      </Info>
                    )
                  })}
              </RightWrap>
            </InfoWrap>
            <ButtonWrapper>
              <Button onClick={onButtonClick}>Go back</Button>
            </ButtonWrapper>
          </Table>
      }
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 24px;
`;

const Table = styled.div`
  border: 1px solid rgb(243 244 246);
  border-radius: 0.25rem;
  background-color: #fff;
`;

const Header = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid rgb(243 244 246);
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 8px;
`;

const InfoWrap = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const LeftWrap = styled.div`
`;

const Info = styled.div`
  margin: 0 0 12px;

  &:last-child {
    margin: 0;
  }
`;

const InfoTitle = styled.div`
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0 0 8px;
  user-select: text;
`;

const InfoValue = styled.div<{ isColored?: boolean }>`
  line-height: 1.5rem;
  color: ${({isColored}) => isColored && 'rgb(37 99 235)'};
  cursor: ${({isColored}) => isColored && 'pointer'};
  user-select: text;
`;

const RightWrap = styled.div`
`;

const ButtonWrapper = styled.div`
  padding: 24px;
`;

const Button = styled.button`
  width: 94px;
  height: 42px;
  background-color: rgb(239 68 68);
  border: 1px solid rgb(239 68 68);
  color: rgb(255 255 255);
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 8px 16px;
  
  &:hover {
    background-color: rgb(220 38 38);
  }
`;

export default EmployeesInfo;
