import React from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { deleteKeys } from '../../../utils/deleteKeys';
import { useNavigate, useParams } from 'react-router-dom';
import { Path } from '../../../App';

const SupplierInfo = () => {
  const nav = useNavigate();

  const infoLeftTitles = ['Company Name', 'Contact Name', 'Contact Title', 'Address', 'City'];
  const infoRightTitles = ['Region', 'Postal Code', 'Country', 'Phone'];

  const suppliers = [
    {
      supplierID: '1', companyName: 'Exotic Liquids', contactName: 'Charlotte Cooper',
      contactTitle: 'Purchasing Manager', address: '49 Gilbert St.', city: 'London', region: 'British Isles',
      postalCode: 'EC1 4SD', country: 'UK', phone: '(171) 555-2222', fax: '', homePage: '',
    },
    {
      supplierID: '2', companyName: 'New Orleans Cajun Delights', contactName: 'Shelley Burke',
      contactTitle: 'Order Administrator', address: 'P.O. Box 78934', city: 'New Orleans', region: 'LA',
      postalCode: '70117', country: 'USA', phone: '(100) 555-4822', fax: '', homePage: '#CAJUN.HTM#',
    },
  ];

  const leftData = suppliers.map((obj) => {
    const array = ['supplierID', 'region', 'postalCode', 'country', 'phone', 'fax', 'homePage'];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });

  const rightData = suppliers.map((obj) => {
    const array = ['supplierID', 'companyName', 'contactName', 'contactTitle', 'address', 'fax', 'homePage', 'city'];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });

  const id: number = Number(useParams().id) - 1;

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
                const value: any = Object.values(leftData[id])[index];
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
                const value: any = Object.values(rightData[id])[index];
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
