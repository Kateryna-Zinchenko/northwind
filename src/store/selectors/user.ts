import { createSelector, Selector } from 'reselect';
import { State } from '../index';
import { ICustomer, IEmployee, IOrder, IProduct, ISupplier } from '../reducers/common';


const selectUserReducer = (state: State) => state.userReducer;

export const selectSuppliers: Selector<State, ISupplier[] | null> = createSelector(
  selectUserReducer,
  ({ suppliers }) => suppliers,
);

export const selectSupplier: Selector<State, ISupplier | null> = createSelector(
  selectUserReducer,
  ({ supplier }) => supplier,
);

export const selectProducts: Selector<State, IProduct[] | null> = createSelector(
  selectUserReducer,
  ({ products }) => products,
);

export const selectProduct: Selector<State, IProduct | null> = createSelector(
  selectUserReducer,
  ({ product }) => product,
);

export const selectOrders: Selector<State, IOrder[] | null> = createSelector(
  selectUserReducer,
  ({ orders }) => orders,
);

export const selectOrder: Selector<State, IOrder | null> = createSelector(
  selectUserReducer,
  ({ order }) => order,
);

export const selectProductsInOrder: Selector<State, IProduct[] | null> = createSelector(
  selectUserReducer,
  ({ productsInOrder }) => productsInOrder,
);

export const selectEmployees: Selector<State, IEmployee[] | null> = createSelector(
  selectUserReducer,
  ({ employees }) => employees,
);

export const selectEmployee: Selector<State, IEmployee | null> = createSelector(
  selectUserReducer,
  ({ employee }) => employee,
);

export const selectCustomers: Selector<State, ICustomer[] | null> = createSelector(
  selectUserReducer,
  ({ customers }) => customers,
);

export const selectCustomer: Selector<State, ICustomer | null> = createSelector(
  selectUserReducer,
  ({ customer }) => customer,
);

export const selectSearchCustomers: Selector<State, any> = createSelector(
  selectUserReducer,
  ({ searchCustomers }) => searchCustomers,
);

export const selectSearchProducts: Selector<State, any> = createSelector(
  selectUserReducer,
  ({ searchProducts }) => searchProducts,
);
