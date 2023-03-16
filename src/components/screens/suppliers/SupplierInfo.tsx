import React, { useEffect } from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { selectSupplier } from '../../../store/selectors/user';
import { useDispatch, useSelector } from 'react-redux';
import { getSupplierInfo } from '../../../store/actions/user';

const SupplierInfo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const supplier = useSelector(selectSupplier);

  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(getSupplierInfo(id));
  }, [])

  const infoLeftTitles = ['Company Name', 'Contact Name', 'Contact Title', 'Address', 'City'];
  const infoRightTitles = ['Region', 'Postal Code', 'Country', 'Phone', 'Fax', 'Home Page'];

  const leftData = () => {
    return {
      company_name: supplier?.company_name,
      contact_name: supplier?.contact_name,
      contact_title: supplier?.contact_title,
      address: supplier?.address,
      city: supplier?.city
    };
  };

  const rightData = () => {
    return {
      region: supplier?.region,
      postal_code: supplier?.postal_code,
      country: supplier?.country,
      phone: supplier?.phone,
      fax: supplier?.fax,
      homepage: supplier?.homepage
    };
  };

  const onButtonClick = () => {
    nav(Path.Suppliers)
  }

  return (
    <Wrapper>
      <Table>
        <Header>
          <BallotIcon />
          <Title>Supplier information</Title>
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
                if (value == null) {
                  title = ''
                }
                return (
                  <Info key={index}>
                    <InfoTitle>{title}</InfoTitle>
                    <InfoValue>{value}</InfoValue>
                  </Info>
                )
              })}
          </RightWrap>
        </InfoWrap>
        <ButtonWrapper>
          <Button onClick={onButtonClick}>Go back</Button>
        </ButtonWrapper>
      </Table>
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
`;

const InfoValue = styled.div`
  line-height: 1.5rem;
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

export default SupplierInfo;
