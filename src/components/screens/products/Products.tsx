import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import { deleteKeys } from '../../../utils/deleteKeys';
import { AppDispatch, Path } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectState } from '../../../store/selectors/user';
import { IProduct, RequestState } from '../../../store/reducers/common';
import Pagination from '../../shared/Pagination';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(selectProducts);
  const state = useSelector(selectState);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const tableData = products?.map((obj) => {
    const array = ['category_id', 'discontinued', 'product_id', 'reorder_level', 'supplier_id', 'supplier_name'];
    const object = { ...obj };
    const data = deleteKeys(object, array);
    object.unit_price = `$${object.unit_price}`;
    return data;
  });

  const postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = tableData?.slice(firstPostIndex, lastPostIndex);

  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Products}/${id}`);
    }
  };

  return (
    <Wrapper className='suppliers'>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
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
                  <TH></TH>
                </TR>
              </THead>
              <TBody>
                {currentPosts && currentPosts.map((obj: IProduct, index: number) => {
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
                  );
                })}
              </TBody>
            </TableComponent>
            {
              tableData &&
              <Pagination
                totalPosts={tableData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          </Table>
      }
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 24px;
  margin: 56px 0 0;
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

  &:nth-child(odd) {
    background-color: rgb(249 250 251)
  }

  &:nth-child(odd):hover {
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

const TD = styled.td<{ isColored: boolean }>`
  padding: 8px 12px;
  height: 40px;
  color: ${({ isColored }) => isColored && 'rgb(37 99 235)'};
  cursor: ${({ isColored }) => isColored && 'pointer'};
  user-select: text;
`;

export default Products;
