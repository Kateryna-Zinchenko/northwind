import { createSelector, Selector } from 'reselect';
import { State } from '../index';
import { ICustomer, IEmployee, IMetrics, IOrder, IProduct, IStats, ISupplier, RequestState } from '../reducers/common';


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

export const selectSearchResults: Selector<State, ICustomer[] | null> = createSelector(
  selectUserReducer,
  ({ searchResults }) => searchResults,
);

export const selectSearchCategory: Selector<State, string | null> = createSelector(
  selectUserReducer,
  ({ searchCategory }) => searchCategory,
);

export const selectLog: Selector<State, any> = createSelector(
  selectUserReducer,
  ({ log }) => log,
);

export const selectState: Selector<State, RequestState> = createSelector(
  selectUserReducer,
  ({ state }) => state,
);

export const selectMetrics: Selector<State, IMetrics | null> = createSelector(
  selectUserReducer,
  ({ metrics }) => metrics,
);
