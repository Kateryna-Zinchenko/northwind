import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch, Path } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchCust, getSearchProd, userActions } from '../../../store/actions/user';
import { selectSearchCategory, selectSearchResults, selectState } from '../../../store/selectors/user';
import { useNavigate } from 'react-router-dom';
import { RequestState } from '../../../store/reducers/common';

enum SearchGroup {
  Products = 'products',
  Customers = 'customers'
}

const Search = () => {
  const [value, setValue] = useState(SearchGroup.Products);
  const [inputValue, setInputValue] = useState('');

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const searchResults = useSelector(selectSearchResults);
  const searchCategory = useSelector(selectSearchCategory);
  const state = useSelector(selectState);

  const id = searchResults?.map((obj: any) => {
    if (searchCategory === SearchGroup.Products) {
      return obj.product_id;
    } else if (searchCategory === SearchGroup.Customers) {
      return obj.customer_id;
    }
  });

  const onRadioButClick = (e: any) => {
    setValue(e.target.value);
    if (e.target.value === SearchGroup.Products) {
      dispatch(getSearchProd(inputValue));
    } else if (e.target.value === SearchGroup.Customers) {
      dispatch(getSearchCust(inputValue));
    }
  };

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const onEnterClick = (e: any) => {
    if (e.key === 'Enter') {
      if (value === SearchGroup.Products) {
        dispatch(getSearchProd(inputValue));
      } else if (value === SearchGroup.Customers) {
        dispatch(getSearchCust(inputValue));
      }
    }
  };

  const goTo = (id: number) => {
    if (searchCategory === SearchGroup.Products) {
      nav(`${Path.Products}/${id}`);
    } else if (searchCategory === SearchGroup.Customers) {
      nav(`${Path.Customers}/${id}`);
    }
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Title>Search Database</Title>
        <InputWrapper>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input
            placeholder='Enter keyword...'
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onEnterClick}
          />
        </InputWrapper>
        <Title>Tables</Title>
        <Buttons>
          <Item onClick={onRadioButClick}>
            <TranspInput
              value={SearchGroup.Products}
              readOnly
            />
            <RadioBut checked={value === SearchGroup.Products} />
            <Name>Products</Name>
          </Item>
          <Item onClick={onRadioButClick}>
            <TranspInput
              value={SearchGroup.Customers}
              readOnly
            />
            <RadioBut checked={value === SearchGroup.Customers} />
            <Name>Customers</Name>
          </Item>
        </Buttons>
        <H1>Search results</H1>
        {
          state === RequestState.LOADING ? <Results>Loading...</Results> :
            <>
              {
                (searchResults?.length === 0 || searchResults == null) &&
                <Results>No results</Results>
              }
              {
                searchResults && searchCategory === SearchGroup.Products && searchResults.map((obj: any, index: number) => (
                  <Products key={index}>
                    <ProductName onClick={() => {if (typeof id !== 'undefined') goTo(id[index])}}>{obj.product_name}</ProductName>
                    <ProductInfo>#{index + 1}, Quantity Per Unit: {obj.quantity_per_unit},
                      Price: {obj.unit_price}, Stock: {obj.units_in_stock}</ProductInfo>
                  </Products>
                ))
              }
              {
                searchResults && searchCategory === SearchGroup.Customers && searchResults.map((obj: any, index: number) => (
                  <Products key={index}>
                    <ProductName onClick={() => {if (typeof id !== 'undefined') goTo(id[index])}}>{obj.company_name}</ProductName>
                    <ProductInfo>#{index + 1}, Contact: {obj.contact_name},
                      Title: {obj.contact_title}, Phone: {obj.phone}</ProductInfo>
                  </Products>
                ))
              }
            </>
        }
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding: 24px;
  margin: 56px 0 0;
`;

const Wrapper = styled.div`
  padding: 24px;
  background: #fff;
  border: 1px solid rgb(243 244 246);
  border-radius: 0.25rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.5rem;
`;

const InputWrapper = styled.label`
  display: block;
  position: relative;
  margin: 0 0 12px;
  height: 40px;
`;

const Icon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  padding: 8px 12px 8px 40px;
  border: 1px solid rgb(156 163 175);
  border-radius: 0.25rem;
  outline: none;

  &:focus {
    outline: 2px solid transparent;
    border-color: rgb(243 244 246);
    box-shadow: 0 0 0 calc(3px) rgba(59, 130, 246, 0.5);
  }

  &::placeholder {
    color: #a1a1a1;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  line-height: 1.5rem;
`;

const Item = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  position: relative;

  &:last-child {
    margin: 0 0 0 12px;
  }
`;

const TranspInput = styled.input`
  display: none;
  width: 15px;
  height: 15px;
  left: 0;
  opacity: 0;
  position: absolute;
`;

const RadioBut = styled.span<{ checked: boolean }>`
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  border: ${({ checked }) => checked ? '5px solid rgb(59 130 246)' : '1px solid rgb(209 213 219)'};
  border-radius: 9999px;
`;

const Name = styled.div`
  padding: 0 0 0 8px;
`;

const H1 = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 16px 0 0;
`;

const Results = styled.div`
  margin: 24px 0 0;
  line-height: 1.5rem;
`;

const Products = styled.div`
  margin: 8px 0 0;
`;

const ProductName = styled.p`
  color: rgb(37 99 235);
  line-height: 1.5rem;
  cursor: pointer;
  user-select: text;
`;

const ProductInfo = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(156 163 175);
  user-select: text;
`;

export default Search;
