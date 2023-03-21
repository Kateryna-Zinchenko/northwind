import { createReducerFunction, ImmerReducer } from 'immer-reducer';
import { ICustomer, IEmployee, IMetrics, IOrder, IProduct, IStats, ISupplier, RequestState } from './common';

interface UserState {
  suppliers: ISupplier[] | null,
  supplier: ISupplier | null,
  products: IProduct[] | null,
  product: IProduct | null,
  orders: IOrder[] | null,
  order: IOrder | null,
  productsInOrder: IProduct[] | null,
  employees: IEmployee[] | null,
  employee: IEmployee | null,
  customers: ICustomer[] | null,
  customer: ICustomer | null,
  searchResults: ICustomer[] | null,
  searchCategory: string | null,
  searchError: string | null,
  log: any,
  state: RequestState,
  metrics: IMetrics | null,
  queries: number,
  results: number,
  select: number,
  selectWhere: number,
  selectLeftJoin: number,
  //log: string
}

const initialState: UserState = {
  suppliers: null,
  supplier: null,
  products: null,
  product: null,
  orders: null,
  order: null,
  productsInOrder: null,
  employees: null,
  employee: null,
  customers: null,
  customer: null,
  searchResults: null,
  searchCategory: null,
  searchError: null,
  log: [],
  state: RequestState.IDLE,
  metrics: null,
  queries: 0,
  results: 0,
  select: 0,
  selectWhere: 0,
  selectLeftJoin: 0,
  //log: '',
};

export class User extends ImmerReducer<UserState> {
  setSuppliers(suppliers: ISupplier[]) {
    this.draftState.suppliers = suppliers;
  }

  setSupplier(supplier: ISupplier) {
    this.draftState.supplier = supplier;
  }

  setProducts(products: IProduct[]) {
    this.draftState.products = products;
  }

  setProduct(product: IProduct) {
    this.draftState.product = product;
  }

  setOrders(orders: IOrder[]) {
    this.draftState.orders = orders;
  }

  setOrder(order: IOrder) {
    this.draftState.order = order;
  }

  setProductsInOrder(productsInOrder: IProduct[]) {
    this.draftState.productsInOrder = productsInOrder;
  }

  setEmployees(employees: IEmployee[]) {
    this.draftState.employees = employees;
  }

  setEmployee(employee: IEmployee) {
    this.draftState.employee = employee;
  }

  setCustomers(customers: ICustomer[]) {
    this.draftState.customers = customers;
  }

  setCustomer(customer: ICustomer) {
    this.draftState.customer = customer;
  }

  setSearchResults(searchResults: ICustomer[] | null) {
    this.draftState.searchResults = searchResults;
  }

  setSearchCategory(searchCategory: string) {
    this.draftState.searchCategory = searchCategory;
  }

  setState(state: RequestState) {
    this.draftState.state = state;
  }

  setMetrics(metrics: IMetrics) {
    this.draftState.metrics = metrics;
  }

  setLog(log: any) {
    this.draftState.log = this.draftState.log.concat(log);
  }

  setQueries(queries: number) {
    this.draftState.queries = this.draftState.queries + queries;
  }

  setResults(results: number) {
    this.draftState.results = Number(this.draftState.results) + Number(results);
  }

  setSelect(select: number) {
    this.draftState.select = this.draftState.select + select;
  }

  setSelectWhere(selectWhere: number) {
    if (typeof selectWhere !== 'undefined')
    this.draftState.selectWhere = this.draftState.selectWhere + selectWhere;
  }

  setSelectLeftJoin(selectLeftJoin: number) {
    if (typeof selectLeftJoin !== 'undefined')
      this.draftState.selectLeftJoin = this.draftState.selectLeftJoin + selectLeftJoin;
  }
}

export default createReducerFunction(User, initialState);
