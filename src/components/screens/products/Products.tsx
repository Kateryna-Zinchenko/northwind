import React from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import { deleteKeys } from '../../../utils/deleteKeys';
import Avatar from '../../shared/Avatar';
import { Path } from '../../../App';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const customers = [
    {
      customerID: 'ALFKI', companyName: 'Alfreds Futterkiste', contactName: 'Maria Anders',
      contactTitle: 'Sales Representative', address: 'Obere Str. 57', city: 'Berlin', region: '',
      postalCode: '12209', country: 'Germany', phone: '030-0074321', fax: '030-0076545',
    },
    {
      customerID: 'ANATR', companyName: 'Ana Trujillo Emparedados y helados', contactName: 'Ana Trujillo',
      contactTitle: 'Owner', address: 'Avda. de la Constitución 2222', city: 'México D.F.', region: '',
      postalCode: '05021', country: 'Mexico', phone: '(5) 555-4729', fax: '(5) 555-3745',
    },
  ];

  const tableData = customers.map((obj) => {
    const array = ['customerID', 'address', 'region', 'postalCode', 'phone', 'fax', 'homePage'];
    const data = deleteKeys(obj, array);
    return data;
  });

  const nav = useNavigate();

  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Products}/${id}`);
    }
  };

  return (
    <Wrapper className='suppliers'>
      <Table>
        <Header>
          <Title>Products</Title>
          <RedoIcon />
        </Header>
        <TableComponent>
          <THead>
            <TR>
              <TH>Name</TH>
              <TH>Qt per unit</TH>
              <TH>Price</TH>
              <TH>Stock</TH>
              <TH>Orders</TH>
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
  padding: 0 28px 0 0;
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

const TD = styled.td<{ isColored: boolean }>`
  padding: 8px 12px;
  height: 40px;
  color: ${({isColored}) => isColored && 'rgb(37 99 235)'};
  cursor: ${({isColored}) => isColored && 'pointer'};
`;

export default Products;
