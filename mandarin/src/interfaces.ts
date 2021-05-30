/*
* Copyright Lolizan  2021  https://vk.com/lolizan
*/

export interface User {
  id: number;
  name: string;
  role: string;
  warehouse_id: number | null;
  created_at: number | null;
  updated_at: number | null;
}

export interface GetUsersRequest {
  current_page: number
  data: User[]
  first_page_url: string
  last_page: number
  last_page_url: string
  next_page_url: string | null
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}
