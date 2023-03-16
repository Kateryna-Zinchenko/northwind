import { createActionCreators } from 'immer-reducer';

import { AsyncAction } from './common';
import { User } from '../reducers/user';

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<
  | typeof userActions.setSuppliers
  | typeof userActions.setSupplier
  | typeof userActions.setProducts
  | typeof userActions.setProduct
  | typeof userActions.setOrders
  | typeof userActions.setOrder
  | typeof userActions.setProductsInOrder
  | typeof userActions.setEmployees
  | typeof userActions.setEmployee
  | typeof userActions.setCustomers
  | typeof userActions.setCustomer
  | typeof userActions.setSearchCustomers
  | typeof userActions.setSearchProducts
  >;

export const getSuppliers = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getSuppliers();
    dispatch(userActions.setSuppliers(res.data.suppliers));
  } catch (e: any) {
    console.log(e);
  }
};

export const getSupplierInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getSupplierInfo(id);
    dispatch(userActions.setSupplier(res.data.supplier));
  } catch (e: any) {
    console.log(e);
  }
};

export const getProducts = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getProducts();
    console.log(res.data);
    dispatch(userActions.setProducts(res.data.products));
  } catch (e: any) {
    console.log(e);
  }
};

export const getProductInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getProductInfo(id);
    console.log(res.data);
    dispatch(userActions.setProduct(res.data.product));
  } catch (e: any) {
    console.log(e);
  }
};

export const getOrders = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getOrders();
    console.log(res.data);
    dispatch(userActions.setOrders(res.data.orders));
  } catch (e: any) {
    console.log(e);
  }
};

export const getOrderInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getOrderInfo(id);
    console.log(res.data);
    dispatch(userActions.setOrder(res.data.order));
  } catch (e: any) {
    console.log(e);
  }
};

export const getOrderProducts = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getOrderProducts(id);
    console.log(res.data);
    dispatch(userActions.setProductsInOrder(res.data.orders));
  } catch (e: any) {
    console.log(e);
  }
};

export const getEmployees = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getEmployees();
    console.log(res.data);
    dispatch(userActions.setEmployees(res.data.employees));
  } catch (e: any) {
    console.log(e);
  }
};

export const getEmployeeInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getEmployeeInfo(id);
    console.log(res.data);
    dispatch(userActions.setEmployee(res.data.employee));
  } catch (e: any) {
    console.log(e);
  }
};

export const getCustomers = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getCustomers();
    console.log(res.data);
    dispatch(userActions.setCustomers(res.data.customers));
  } catch (e: any) {
    console.log(e);
  }
};

export const getCustomerInfo = (id: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getCustomerInfo(id);
    console.log(res.data);
    dispatch(userActions.setCustomer(res.data.customer));
  } catch (e: any) {
    console.log(e);
  }
};

export const getSearchCust = (filter: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getSearchCust(filter);
    console.log(res.data);
    dispatch(userActions.setSearchCustomers(res.data.customers));
  } catch (e: any) {
    console.log(e);
  }
};

export const getSearchProd = (filter: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    const res = await mainApi.getSearchProd(filter);
    console.log(res.data);
    dispatch(userActions.setSearchProducts(res.data.products));
  } catch (e: any) {
    console.log(e);
  }
};
