import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchCust, getSearchProd } from '../../../store/actions/user';
import { selectSearchCustomers, selectSearchProducts } from '../../../store/selectors/user';

enum SearchGroup {
  Products = 'products',
  Customers = 'customers'
}

const Search = () => {
  const [value, setValue] = useState(SearchGroup.Products);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const customers = useSelector(selectSearchCustomers);
  const products = useSelector(selectSearchProducts);

  useEffect(() => {
    dispatch(getSearchCust(value))
    dispatch(getSearchProd(value))
  },[])

  const onRadioButClick = (e: any) => {
    setValue(e.target.value);
  }

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
  }

  // const onEnterClick = (e: any) => {
  //   if (e.key === 'Enter') {
  //
  //   }
  // }

  console.log(customers, products);

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
            // onKeyDown={onEnterClick}
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
        <Results>No results</Results>
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding: 24px;
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
  border: ${({checked}) => checked ? '5px solid rgb(59 130 246)' : '1px solid rgb(209 213 219)'};
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

export default Search;
