import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import { AppDispatch, Path } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { selectOrders, selectState } from '../../../store/selectors/user';
import { getOrders } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { date, price } from '../../../utils/deleteKeys';
import { RequestState } from '../../../store/reducers/common';
import Pagination2 from '../../shared/Pagination2';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const orders = useSelector(selectOrders);
  const state = useSelector(selectState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const tableData = orders?.map((obj) => {
    return {
      order_id: obj.order_id,
      total_products_price: price(`${Math.round(obj.total_products_price * 100) / 100}`),
      total_products: obj.total_products,
      total_products_items: obj.total_products_items,
      shipped_date: date(obj.shipped_date),
      ship_name: obj.ship_name,
      ship_city: obj.ship_city,
      ship_country: obj.ship_country,
    };
  });

  const PageSize = 20;

  const postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = tableData?.slice(firstPostIndex, lastPostIndex);

  const id = orders?.map((obj) => {
    return obj.order_id;
  });

  const goTo = (id: number, index: number) => {
    if (index === 0) {
      nav(`${Path.Orders}/${id}`);
    }
  };

  return (
    <Wrapper className='suppliers'>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
          <Table>
            <Header>
              <Title>Orders</Title>
              <RedoIcon />
            </Header>
            <TableComponent>
              <THead>
                <TR>
                  <TH>Id</TH>
                  <TH>Total Price</TH>
                  <TH>Products</TH>
                  <TH>Quantity</TH>
                  <TH>Shipped</TH>
                  <TH>Ship Name</TH>
                  <TH>City</TH>
                  <TH>Country</TH>
                  <TH></TH>
                </TR>
              </THead>
              <TBody>
                {currentPosts && currentPosts.map((obj, index: number) => {
                  return (
                    <TR key={index}>
                      {Object.values(obj).map((value, valIndex) => (
                        <TD
                          key={valIndex}
                          isColored={valIndex === 0}
                          onClick={() => goTo(id![index], valIndex)}
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
              <Pagination2
                currentPage={currentPage}
                totalCount={tableData.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
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

export default Orders;
