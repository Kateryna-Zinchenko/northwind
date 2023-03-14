import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/shared/Container';
import styled from 'styled-components';
import Header from './components/shared/Header';
import Home from './components/screens/home/Home';
import Suppliers from './components/screens/suppliers/Suppliers';
import Customers from './components/screens/customers/Customers';
import SupplierInfo from './components/screens/suppliers/SupplierInfo';
import CustomersInfo from './components/screens/customers/CustomersInfo';
import Employees from './components/screens/employees/Employees';
import EmployeesInfo from './components/screens/employees/EmployeesInfo';
import Products from './components/screens/products/Products';
import ProductsInfo from './components/screens/products/ProductsInfo';
import Orders from './components/screens/orders/Orders';
import OrderInfo from './components/screens/orders/OrderInfo';

export enum Path {
  Home = '/',
  Dashboard = '/dashboard',
  Suppliers = '/suppliers',
  Products = '/products',
  Orders = '/orders',
  Employees = '/employees',
  Customers = '/customers',
  Search = '/search',
}

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Wrapper>
        <LeftWrapper>
          <Container />
        </LeftWrapper>
        <RightWrapper>
          <Header />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Suppliers} element={<Suppliers />} />
            <Route path={`${Path.Suppliers}/:id`} element={<SupplierInfo />} />
            <Route path={Path.Products} element={<Products />} />
            <Route path={`${Path.Products}/:id`} element={<ProductsInfo />} />
            <Route path={Path.Orders} element={<Orders />} />
            <Route path={`${Path.Orders}/:id`} element={<OrderInfo />} />
            <Route path={Path.Customers} element={<Customers />} />
            <Route path={`${Path.Customers}/:id`} element={<CustomersInfo />} />
            <Route path={Path.Employees} element={<Employees />} />
            <Route path={`${Path.Employees}/:id`} element={<EmployeesInfo />} />
          </Routes>
        </RightWrapper>
      </Wrapper>
    </BrowserRouter>
  </>
);

const Wrapper = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  
`;

const RightWrapper = styled.div`
  width: 100%;
  background-color: rgb(249 250 251);
`;

export default App;
