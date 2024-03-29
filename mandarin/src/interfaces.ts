/*
* Copyright Lolizan  2021  https://vk.com/lolizan
*/

export interface User {
  id: number;
  name: string;
  role: string;
  warehouse: Warehouse
  created_at: number | null;
  updated_at: number | null;
}

export interface Warehouse {
  id: number
  storage: string
}

export interface Product {
  id: number
  warehouse_id: number
  article: any
  amount: number
  cell: number
}

export interface PaginationData<T> {
  current_page: number
  data: T
  first_page_url: string
  last_page: number
  last_page_url: string
  next_page_url: string | null
  per_page: number
  path: string
  prev_page_url: string | null
  to: number
  total: number
}
