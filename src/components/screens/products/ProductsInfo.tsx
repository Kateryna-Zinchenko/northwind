import React, { useEffect } from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { selectProduct, selectState } from '../../../store/selectors/user';
import { useDispatch, useSelector } from 'react-redux';
import { getProductInfo } from '../../../store/actions/user';
import { RequestState } from '../../../store/reducers/common';

const ProductInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();

  const product = useSelector(selectProduct);
  const state = useSelector(selectState);

  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(getProductInfo(id));
  }, []);

  const infoLeftTitles = ['Product Name', 'Supplier', 'Quantity Per Unit', 'Unit Price'];
  const infoRightTitles = ['Units In Stock', 'Units In Order', 'Reorder Level', 'Discontinued'];

  const leftData = () => {
    return {
      product_name: product?.product_name,
      supplier: product?.supplier_name,
      quantity_per_unit: product?.quantity_per_unit,
      unit_price: `$${product?.unit_price}`,
    };
  };

  const rightData = () => {
    return {
      units_in_stock: product?.units_in_stock,
      units_on_order: product?.units_on_order,
      reorder_level: product?.reorder_level,
      discontinued: product?.discontinued,
    };
  };

  const onButtonClick = () => {
    nav(Path.Products);
  };

  const goTo = (index: number) => {
    if (index === 1) {
      nav(`${Path.Suppliers}/${product?.supplier_id}`);
    }
  };

  return (
    <Wrapper>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
          <Table>
            <Header>
              <BallotIcon />
              <Title>Product information</Title>
            </Header>
            <InfoWrap>
              <LeftWrap>
                {
                  infoLeftTitles.map((title, index: number) => {
                    const value: any = Object.values(leftData())[index];
                    return (
                      <Info key={index}>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoValue
                          isColored={index === 1}
                          onClick={() => goTo(index)}
                        >
                          {value}
                        </InfoValue>
                      </Info>
                    );
                  })}
              </LeftWrap>
              <RightWrap>
                {
                  infoRightTitles.map((title, index: number) => {
                    const value: any = Object.values(rightData())[index];
                    if (value == null) {
                      title = '';
                    }
                    return (
                      <Info key={index}>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoValue>{value}</InfoValue>
                      </Info>
                    );
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
  margin: 56px 0 0;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
  color: ${({ isColored }) => isColored && 'rgb(37 99 235)'};
  cursor: ${({ isColored }) => isColored && 'pointer'};
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

export default ProductInfo;
