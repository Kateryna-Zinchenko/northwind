import { createActionCreators } from 'immer-reducer';

import { AsyncAction } from './common';
import { User } from '../reducers/user';
import { RequestState } from '../reducers/common';

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
  | typeof userActions.setSearchResults
  | typeof userActions.setSearchCategory
  | typeof userActions.setStats
  | typeof userActions.setState
  >;

export const getSuppliers = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getSuppliers();
    dispatch(userActions.setSuppliers(res.data.suppliers));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getSupplierInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getSupplierInfo(id);
    dispatch(userActions.setSupplier(res.data.supplier));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getProducts = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getProducts();
    dispatch(userActions.setProducts(res.data.products));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getProductInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getProductInfo(id);
    dispatch(userActions.setProduct(res.data.product));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getOrders = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getOrders();
    dispatch(userActions.setOrders(res.data.orders));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getOrderInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getOrderInfo(id);
    dispatch(userActions.setOrder(res.data.order));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getOrderProducts = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getOrderProducts(id);
    dispatch(userActions.setProductsInOrder(res.data.orders));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getEmployees = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getEmployees();
    dispatch(userActions.setEmployees(res.data.employees));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getEmployeeInfo = (id: number): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getEmployeeInfo(id);
    dispatch(userActions.setEmployee(res.data.employee));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getCustomers = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getCustomers();
    dispatch(userActions.setCustomers(res.data.customers));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getCustomerInfo = (id: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getCustomerInfo(id);
    dispatch(userActions.setCustomer(res.data.customer));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

export const getSearchCust = (filter: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getSearchCust(filter);
    dispatch(userActions.setSearchResults(res.data.customers));
    dispatch(userActions.setSearchCategory(Object.keys(res.data)[0]));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
    dispatch(userActions.setSearchCategory('customers'));
  }
};

export const getSearchProd = (filter: string): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getSearchProd(filter);
    dispatch(userActions.setSearchResults(res.data.products));
    dispatch(userActions.setSearchCategory(Object.keys(res.data)[0]));
    dispatch(userActions.setStats(res.data.stats));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
    dispatch(userActions.setSearchCategory('products'));
  }
};
