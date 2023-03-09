import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { Path } from '../../App';

const Container: React.FC = () => {
  const general = [
    { icon: <HomeIcon />, title: 'Home', path: Path.Home },
    { icon: <DisplaySettingsIcon />, title: 'Dashboard', path: Path.Dashboard },
  ];

  const backoffice = [
    { icon: <InventoryIcon />, title: 'Suppliers', path: Path.Suppliers },
    { icon: <ProductionQuantityLimitsIcon />, title: 'Products', path: Path.Products },
    { icon: <ShoppingCartIcon />, title: 'Orders', path: Path.Orders },
    { icon: <BadgeIcon />, title: 'Employees', path: Path.Employees },
    { icon: <GroupIcon />, title: 'Customers', path: Path.Customers },
    { icon: <SearchIcon />, title: 'Search', path: Path.Search },
  ];

  const nav = useNavigate();
  const location = useLocation();

  const goTo = (path: string) => {
    nav(path);
  };

  return (
    <Wrapper>
      <NavBar>
        <Logo>Northwind
          <LogoSpan>&nbsp;Traders</LogoSpan>
        </Logo>
        <Title>General</Title>
        {
          general.map((item, index) => (
            <Item
              key={index}
              onClick={() => goTo(item.path)}
              isActive={location.pathname === item.path}
            >
              <Icon>{item.icon}</Icon>
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))
        }
        <Title>Backoffice</Title>
        {
          backoffice.map((item, index) => (
            <Item
              key={index}
              onClick={() => goTo(item.path)}
              isActive={location.pathname === item.path}
            >
              <Icon>{item.icon}</Icon>
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))
        }
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const NavBar = styled.nav`
  width: 240px;
  height: calc(100vh);
  background-color: rgb(31 41 55);
`;

const Logo = styled.div`
  width: 240px;
  height: 56px;
  padding: 0 24px 0 12px;
  background-color: rgb(17 24 39);
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: 900;
`;

const LogoSpan = styled.span`
  font-weight: 400;
`;

const Title = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  color: rgb(156 163 175);
  font-size: 12px;
  font-weight: 400;
  padding: 1px 12px 0 12px;
  text-transform: uppercase;
`;

const Item = styled.div<{ isActive: boolean }>`
  height: 40px;
  color: #D1D5DB;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive && 'rgb(55 65 81)'};

  &:hover {
    background-color: rgb(55 65 81);
  }
`;

const Icon = styled.span`
  padding: 3px 12px 0 0;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export default Container;
