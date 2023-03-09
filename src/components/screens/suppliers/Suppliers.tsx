import React from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import { deleteKeys } from '../../../utils/deleteKeys';
import Avatar from '../../shared/Avatar';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../App';

const Suppliers = () => {
  const suppliers = [
    {
      supplierID: '1', companyName: 'Exotic Liquids', contactName: 'Charlotte Cooper',
      contactTitle: 'Purchasing Manager', address: '49 Gilbert St.', city: 'London', region: '',
      postalCode: 'EC1 4SD', country: 'UK', phone: '(171) 555-2222', fax: '', homePage: '',
    },
    {
      supplierID: '2', companyName: 'New Orleans Cajun Delights', contactName: 'Shelley Burke',
      contactTitle: 'Order Administrator', address: 'P.O. Box 78934', city: 'New Orleans', region: 'LA',
      postalCode: '70117', country: 'USA', phone: '(100) 555-4822', fax: '', homePage: '#CAJUN.HTM#',
    },
  ];

  const tableData = suppliers.map((obj) => {
    const array = ['supplierID', 'address', 'region', 'postalCode', 'phone', 'fax', 'homePage'];
    const data = deleteKeys(obj, array);
    return data;
  });

  const nav = useNavigate();

  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Suppliers}/${id}`);
    }
  };

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  console.log(randomColor);
  return (
    <Wrapper className='suppliers'>
      <Table>
        <Header>
          <Title>Suppliers</Title>
          <RedoIcon />
        </Header>
        <TableComponent>
          <THead>
            <TR>
              <TH></TH>
              <TH>Company</TH>
              <TH>Contact</TH>
              <TH>Title</TH>
              <TH>City</TH>
              <TH>Country</TH>
            </TR>
          </THead>
          <TBody>
            {tableData && tableData.map((obj: typeof suppliers[0], index: number) => {
              const firstLetter = obj.contactName.split(' ')[0][0]
              const secondLetter = obj.contactName.split(' ')[1][0]
              return (
                <TR key={index}>
                  <TDAvatar>
                    <Avatar firstLetter={firstLetter} secondLetter={secondLetter} />
                  </TDAvatar>
                  {Object.values(obj).map((value, valIndex) => (
                    <TD
                      key={valIndex}
                      isColored={valIndex === 0}
                      onClick={() => goTo(`${index + 1}`, valIndex)}>
                      {value}
                    </TD>
                  ))}
                </TR>
              )
            })}
          </TBody>
        </TableComponent>
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
`;

const Header = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid rgb(243 244 246);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const TableComponent = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 0 24px 0 0;
  border-spacing: 0;
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

const TDAvatar = styled.td`
  width: 48px;
  text-align: center;
  padding: 8px 12px;

`;

const TD = styled.td<{ isColored: boolean }>`
  padding: 8px 12px;
  height: 40px;
  color: ${({isColored}) => isColored && 'rgb(37 99 235)'};
  cursor: ${({isColored}) => isColored && 'pointer'};
`;

export default Suppliers;
