import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import { deleteKeys, getRandomColor } from '../../../utils/deleteKeys';
import Avatar from '../../shared/Avatar';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { getSuppliers } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectState, selectSuppliers } from '../../../store/selectors/user';
import { ISupplier, RequestState } from '../../../store/reducers/common';

const Suppliers = () => {
  const [colors, setColors] = useState<string[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();

  const suppliers = useSelector(selectSuppliers);
  const state = useSelector(selectState);

  useEffect(() => {
    const storedColors = localStorage.getItem('suppliers_colors');
    if (storedColors) {
      setColors(JSON.parse(storedColors));
    } else {
      if (suppliers != null) {
        const initialColors = Array.from({ length: suppliers.length }, () => getRandomColor());
        localStorage.setItem('suppliers_colors', JSON.stringify(initialColors));
        setColors(initialColors);
      }
    }
  }, [suppliers]);

  useEffect(() => {
    if (!suppliers) {
      dispatch(getSuppliers());
    }
  }, [])

  const tableData = suppliers?.map((obj) => {
    const array = ['supplier_id', 'address', 'region', 'postal_code', 'phone', 'fax', 'homepage'];
    const object = {...obj};
    const data = deleteKeys(object, array);
    return data;
  });


  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Suppliers}/${id}`);
    }
  };

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  return (
    <Wrapper className='suppliers'>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
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
                  <TH></TH>
                </TR>
              </THead>
              <TBody>
                {/*{*/}
                {/*  tableData && tableData.map((obj: ISupplier, index: number) => {*/}
                {/*  const firstLetter = obj.contact_name.split(' ')[0][0]*/}
                {/*  const secondLetter = obj.contact_name.split(' ')[1][0]*/}
                {/*  return (*/}
                {/*    <TR key={index}>*/}
                {/*      <TDAvatar>*/}
                {/*        <Avatar color={colors[index]} firstLetter={firstLetter} secondLetter={secondLetter} />*/}
                {/*      </TDAvatar>*/}
                {/*      {Object.values(obj).map((value: string, valIndex) => (*/}
                {/*        <TD*/}
                {/*          key={valIndex}*/}
                {/*          isColored={valIndex === 0}*/}
                {/*          onClick={() => goTo(`${index + 1}`, valIndex)}>*/}
                {/*          {value}*/}
                {/*        </TD>*/}
                {/*      ))}*/}
                {/*    </TR>*/}
                {/*  )*/}
                {/*})}*/}
                {
                  tableData && tableData.map((obj: ISupplier, index: number) => {
                  const firstLetter = obj.contact_name.split(' ')[0][0]
                  const secondLetter = obj.contact_name.split(' ')[1][0]
                  return (
                    <TR key={index}>
                      <TDAvatar>
                        <Avatar color={colors[index]} firstLetter={firstLetter} secondLetter={secondLetter} />
                      </TDAvatar>
                      {Object.values(obj).map((value: string, valIndex) => (
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
  user-select: text;
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
  user-select: text;
`;

export default Suppliers;
