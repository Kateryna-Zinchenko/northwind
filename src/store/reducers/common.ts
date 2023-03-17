export enum RequestState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface IStats {
  log: string[]
  queries: number
  results: number
  select: number
}

export interface ISupplier {
  address: string
  city: string
  company_name: string
  contact_name: string
  contact_title: string
  country: string
  fax: string | null
  homepage: string | null
  phone: string
  postal_code: string
  region: string | null
  supplier_id: number
}

export interface IProduct {
  category_id: number
  discontinued: number
  product_id: number
  product_name: string
  quantity_per_unit: string
  reorder_level: number
  supplier_id: number
  supplier_name: string
  unit_price: number | string
  units_in_stock: number
  units_on_order: number
  quantity: number
  total_products_price: number
  discount: number
}

export interface IOrder {
  customer_id: string
  employee_id: number
  freight: number
  order_date: string
  order_id: number
  required_date: string
  ship_address: string
  ship_city: string
  ship_country: string
  ship_name: string
  ship_postal_code: string
  ship_region: string | null
  ship_via: number
  shipped_date: string
  total_products: string
  total_products_discount: number
  total_products_items: string
  total_products_price: number
  ship_via_company_name: string
}

export interface IEmployee {
  report_employee_id: number
  birth_date: string
  address: string
  city: string
  country: string
  employee_id: number
  extension: string
  full_name: string
  hire_date: string
  home_phone: string
  notes: string
  postal_code: string
  title: string
  title_of_courtesy: string
  report_full_name: string
}

export interface ICustomer {
  address: string
  company_name: string
  city: string
  country: string
  contact_name: string
  contact_title: string
  customer_id: string
  fax: string
  phone: string
  postal_code: string
  region: string
}

export interface ISuppliers {
  suppliers: ISupplier[]
  stats: IStats
}

export interface IProducts {
  products: IProduct[]
  stats: IStats
}

export interface IOrders {
  orders: IOrder[]
  stats: IStats
}

export interface ICustomers {
  customers: ICustomer[]
  stats: IStats
}
