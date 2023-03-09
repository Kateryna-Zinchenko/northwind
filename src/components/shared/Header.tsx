import React, { useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainWrapper>
      <Wrapper>
        <ClockWrapper>
          <Clock />
        </ClockWrapper>
        <MenuWrapper isOpen={isOpen} onClick={onMenuClick}>
          <MenuIcon />
          <Caption>SQLite Links</Caption>
          <KeyboardArrowDownIcon />
        </MenuWrapper>
      </Wrapper>
      <DropDownWrap isOpen={isOpen}>
        <Item href="https://blog.cloudflare.com/introducing-d1">
          <Icon><InsertLinkIcon /></Icon>
          <Title>Introducing D1</Title>
        </Item>
        <Item href="https://www.sqlite.org/lang.html">
          <InsertLinkIcon />
          <Title>SQLite SQL Flavour</Title>
        </Item>
        <Item href="https://developers.cloudflare.com/workers/learning/using-durable-objects/">
          <InsertLinkIcon />
          <Title>Durable Objects</Title>
        </Item>
      </DropDownWrap>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 36px;
  background-color: #fff;
  border-bottom: 1px solid rgb(243 244 246);
`;

const ClockWrapper = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 1px 0 0;
  color: ${({isOpen}) => isOpen ? '#3B82F6' : '#000'};
`;

const Caption = styled.div`
  margin: 0 0 0 8px;
`;

const DropDownWrap = styled.div<{ isOpen: boolean }>`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  width: 195px;
  border-top: 2px solid #e5e7eb;
  background-color: rgb(255 255 255);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
  position: absolute;
  right: 0.5px;
  top: 55px;
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 0;
`;

const Title = styled.div`
  margin: 0 0 0 8px;
  font-size: 14px;
`;

export default Header;
