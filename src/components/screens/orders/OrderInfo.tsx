import React, { useEffect } from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { date, price } from '../../../utils/deleteKeys';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { selectOrder, selectProductsInOrder } from '../../../store/selectors/user';
import { getOrderInfo, getOrderProducts } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';

(function() {
  function decimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
})();

const OrderInfo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const order = useSelector(selectOrder);
  const productsInOrder = useSelector(selectProductsInOrder);

  const id = Number(useParams().id);

  console.log(order);

  useEffect(() => {
    dispatch(getOrderInfo(id));
    dispatch(getOrderProducts(id));
  }, [])

  const infoLeftTitles = ['Customer Id', 'Ship Name', 'Total Products', 'Total Quantity', 'Total Price', 'Total Discount', 'Ship Via', 'Freight'];
  const infoRightTitles = ['Order Date', 'Required Date', 'Shipped Date', 'Ship City', 'Ship Region', 'Ship Postal Code', 'Ship Country'];

  const leftData = {
    customer_id: order?.customer_id,
    ship_name: order?.ship_name,
    total_products: order?.total_products,
    total_products_items: order?.total_products_items,
    total_products_price: price(`${Math.round10(order?.total_products_price, -1)}`),
    total_products_discount: price(`${Math.round10(order?.total_products_discount, -1)}`),
    ship_via_company_name: order?.ship_via_company_name,
    freight: `$${order?.freight}`,
  };

  const rightData = order && {
    order_date: date(order?.order_date),
    required_date: date(order?.required_date),
    shipped_date: date(order?.shipped_date),
    ship_city: order?.ship_city,
    ship_region: order?.ship_region,
    ship_postal_code: order?.ship_postal_code,
    ship_country: order?.ship_country,
  };

  const tableData = productsInOrder?.map((obj) => {
    return {
      product_name: obj.product_name,
      quantity: obj.quantity,
      unit_price: price(`${Math.round10(obj.unit_price, -1)}`),
      total_products_price: price(`${Math.round10(obj.total_products_price, -1)}`),
      discount: `${obj.discount}%`
    }
  });

  const onButtonClick = () => {
    nav(Path.Orders)
  }

  const goToCustomer = (index: number) => {
    if (index === 0) {
      nav(`${Path.Customers}/${order?.customer_id}`);
    }
  };

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
                const value: any = Object.values(leftData)[index];
                return (
                  <Info key={index}>
                    <InfoTitle>{title}</InfoTitle>
                    <InfoValue
                      isColored={index === 0}
                      onClick={() => goToCustomer(index)}
                    >
                      {value}
                    </InfoValue>
                  </Info>
                )
              })}
          </LeftWrap>
          <RightWrap>
            {
              infoRightTitles.map((title, index: number) => {
                const value: any = rightData && Object.values(rightData)[index];
                if (value === null || value === ' ') {
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
              {tableData && tableData.map((obj, index: number) => {
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

const InfoValue = styled.div<{ isColored?: boolean }>`
  line-height: 1.5rem;
  color: ${({isColored}) => isColored && 'rgb(37 99 235)'};
  cursor: ${({isColored}) => isColored && 'pointer'};
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
