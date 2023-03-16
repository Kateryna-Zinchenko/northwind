import { createReducerFunction, ImmerReducer } from 'immer-reducer';
import { ICustomer, IEmployee, IOrder, IProduct, IProducts, ISupplier } from './common';

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
  searchCustomers: ICustomer[] | null,
  searchProducts: IProduct[] | null,
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
  searchCustomers: null,
  searchProducts: null
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

  setSearchCustomers(searchCustomers: ICustomer[]) {
    this.draftState.searchCustomers = searchCustomers;
  }

  setSearchProducts(searchProducts: IProduct[]) {
    this.draftState.searchProducts = searchProducts;
  }
}

export default createReducerFunction(User, initialState);
