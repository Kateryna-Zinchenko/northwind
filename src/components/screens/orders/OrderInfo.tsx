import React from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { deleteKeys } from '../../../utils/deleteKeys';
import { useNavigate, useParams } from 'react-router-dom';
import { Path } from '../../../App';

const OrderInfo = () => {
  const nav = useNavigate();

  const infoLeftTitles = ['Customer Id', 'Ship Name', 'Total Products', 'Total Quantity', 'Total Price', 'Total Discount', 'Ship Via', 'Freight'];
  const infoRightTitles = ['Order Date', 'Required Date', 'Shipped Date', 'Ship City', 'Ship Region', 'Ship Postal Code', 'Ship Country'];

  const customers = [
    {
      customerID: 'ALFKI', companyName: 'Alfreds Futterkiste', contactName: 'Maria Anders',
      contactTitle: 'Sales Representative', address: 'Obere Str. 57', city: 'Berlin', postalCode: '12209',
      region: '', country: 'Germany', phone: '030-0074321', fax: '030-0076545',
    },
    {
      customerID: 'ANATR', companyName: 'Ana Trujillo Emparedados y helados', contactName: 'Ana Trujillo',
      contactTitle: 'Owner', address: 'Avda. de la Constitución 2222', city: 'México D.F.',
      postalCode: '05021', region: '', country: 'Mexico', phone: '(5) 555-4729', fax: '(5) 555-3745',
    },
  ];

  const leftData = customers.map((obj) => {
    const array = ['customerID', 'region', 'postalCode'];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });

  const rightData = customers.map((obj) => {
    const array: string[] = [];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });

  const tableData = customers.map((obj) => {
    const array: string[] = ['fax', 'phone', 'country', 'region', 'postalCode', 'city'];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });

  const id: number = Number(useParams().id) - 1;

  const onButtonClick = () => {
    nav(Path.Orders)
  }

  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Products}/${id}`);
    }
  };

  return (
    <Wrapper>
      <Table>
        <Header>
          <BallotIcon />
          <Title>Order information</Title>
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
        <Table>
          <Header2>
            <Title2>Products in Order</Title2>
          </Header2>
          <TableComponent>
            <THead>
              <TR>
                <TH>Product</TH>
                <TH>Quantity</TH>
                <TH>Order Price</TH>
                <TH>Total Price</TH>
                <TH>Discount</TH>
              </TR>
            </THead>
            <TBody>
              {tableData && tableData.map((obj: typeof customers[0], index: number) => {
                return (
                  <TR key={index}>
                    {Object.values(obj).map((value, valIndex) => (
                      <TD
                        key={valIndex}
                        isColored={valIndex === 0}
                        onClick={() => goTo(`${index + 1}`, valIndex)}
                      >
                        {value}
                      </TD>
                    ))}
                  </TR>
                )
              })}
            </TBody>
          </TableComponent>
        </Table>
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
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const Header2 = styled(Header)`
  height: 48px;
  line-height: 1.5%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 8px;
`;

const Title2 = styled(Title)`
  margin: 1px 0 0;
`;

const InfoWrap = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 1rem;
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

const TableComponent = styled.table`
  width: 100%;
  background-color: #fff;
  border-spacing: 0;
  margin: 1px 0 0;
`;

const THead = styled.thead`
  & > tr:nth-child(odd) {
    background-color: #fff;
  }
  & > tr:nth-child(odd):hover {
    background-color: #fff;
  }
`;

const TR = styled.tr`
  &:hover {
    background-color: rgb(243 244 246);
  }
  &:nth-child(odd){
    background-color: rgb(249 250 251)
  }
  &:nth-child(odd):hover{
    background-color: rgb(243 244 246);
  }
`;

const TH = styled.th`
  padding: 8px 12px;
  text-align: left;
  height: 40px;
`;

const TBody = styled.tbody``;

const TD = styled.td<{ isColored: boolean }>`
  padding: 8px 12px;
  height: 40px;
  color: ${({isColored}) => isColored && 'rgb(37 99 235)'};
  cursor: ${({isColored}) => isColored && 'pointer'};
`;

export default OrderInfo;
