import { createReducerFunction, ImmerReducer } from 'immer-reducer';
import { ICustomer, IEmployee, IOrder, IProduct, IStats, ISupplier, RequestState } from './common';

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
  stats: IStats[] | [],
  state: RequestState,
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
  stats: [],
  state: RequestState.IDLE,
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

  setStats(stats: IStats) {
    this.draftState.stats = [...this.draftState.stats, stats];
  }

  setState(state: RequestState) {
    this.draftState.state = state;
  }
}

export default createReducerFunction(User, initialState);
