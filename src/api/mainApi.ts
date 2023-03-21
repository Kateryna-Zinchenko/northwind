import HttpClient from './httpClient';
import {
  ICustomer,
  ICustomers,
  IEmployee, IMetrics, IOrder, IOrders,
  IProduct,
  IProducts,
  IStats,
  ISupplier,
  ISuppliers,
} from '../store/reducers/common';

class MainApi extends HttpClient {
  private static instanceCached: MainApi;

  public constructor() {
    super(import.meta.env.VITE_BASE_URL);
  }

  static getInstance = () => {
    if (!MainApi.instanceCached) {
      MainApi.instanceCached = new MainApi();
    }
    return MainApi.instanceCached;
  };

  public getSuppliers = () => this.instance.get<ISuppliers>('suppliers');

  public getSupplierInfo = (id: number) => this.instance.get<{ supplier: ISupplier, stats: IStats }>(`suppliers/${id}`);

  public getProducts = () => this.instance.get<IProducts>('products');

  public getProductInfo = (id: number) => this.instance.get<{ product: IProduct, stats: IStats }>(`products/${id}`);

  public getOrders = () => this.instance.get<IOrders>('orders');

  public getOrderInfo = (id: number) => this.instance.get<{ order: IOrder, stats: IStats }>(`orders/${id}`);

  public getOrderProducts = (id: number) => this.instance.get<{ orders: IProduct[], stats: IStats }>(`/orders/products/${id}`);

  public getEmployees = () => this.instance.get<{ employees: IEmployee[], stats: IStats }>('employees');

  public getEmployeeInfo = (id: number) => this.instance.get<{ employee: IEmployee, stats: IStats }>(`employees/${id}`);

  public getCustomers = () => this.instance.get<ICustomers>('customers');

  public getCustomerInfo = (id: string) => this.instance.get<{ customer: ICustomer, stats: IStats }>(`customers/${id}`);

  public getSearchCust= (filter: string) => this.instance.get<ICustomers>(`customers/search/${filter}`);

  public getSearchProd = (filter: string) => this.instance.get<any>(`/products/search/${filter}`);

  public getMetrics = () => this.instance.get<IMetrics>(`/metrics`);
}

export default MainApi;
