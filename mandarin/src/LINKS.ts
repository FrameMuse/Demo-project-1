/*
* Copyright Lolizan  2021  https://vk.com/lolizan
*/

import { useState, useEffect } from "react"
import { PaginationData, User, Warehouse } from "./interfaces"

namespace Links {
  const fetchHost = "http://localhost"
  const fetchConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  async function request(method: "GET" | "POST", endpoint: string, body?: any) {
    const config = { ...fetchConfig, method, body: JSON.stringify(body) }
    const response = await fetch(fetchHost + endpoint, config)
    const payload = await response.json()

    return payload
  }
  function handleError(payload: { status: "success" | "error" }) {
    if (payload.status !== "success") {
      throw new Error("Success is not in the Response")
    }

    return "success"
  }

  export async function logIn(name: "admin" | String, password: "admin" | String) {
    const payload = await request("POST", "/auth", {
      name, password
    })

    return handleError(payload)
  }

  export async function addUser(name: any, password: any, role: any, warehouse_id: any) {
    const payload = await request("POST", "/addUser", {
      name, password, role, warehouse_id
    })

    return handleError(payload)
  }

  export async function removeUser(user_id: number) {
    const payload = await request("POST", "/removeUser", {
      user_id
    })

    return handleError(payload)
  }

  export async function getUsers(): Promise<PaginationData<User[]>> {
    const payload = await request("GET", "/users")

    return payload
  }

  export async function getUserInfo(): Promise<User> {
    const payload = await request("GET", "/user/info")

    return payload
  }

  export async function logOut() {
    const payload = await request("GET", "/logout")

    return payload
  }

  export async function getWarehouses(): Promise<PaginationData<Warehouse[]>> {
    const payload = await request("GET", "/warehouses")

    return payload
  }

  export async function addProduct() {
    const payload = await request("POST", "/addProduct")

    return payload
  }

  export async function removeProduct() {
    const payload = await request("POST", "/removeProduct")

    return payload
  }

  export async function getCells(warehouseId: number): Promise<number[]> {
    const payload = await request("GET", "/getCells?warehouse_id=" + warehouseId)

    return payload
  }

  export async function getProducts() {
    const payload = await request("GET", "/getProducts")

    return payload
  }

  export async function getReport(id: number) {
    const payload = await request("GET", "/getReport?id=" + id)

    return payload
  }
}

export function usePromise<T = any>(promise: Promise<T>) {
  const [result, setResult] = useState<T | null>(null)

  useEffect(() => {
    promise.then(setResult)
  }, [])

  return result
}

export function usePagination<T = any>(paginationData: PaginationData<T> | null, query?: Record<string, string | number>) {
  const [page, setPage] = useState(1)
  const [result, setResult] = useState(paginationData)

  function createStringQuery(query: Record<string, string | number>) {
    return Object.keys(query).map(key => {
      const value = query[key]
      return (key + "=" + value)
    }).join("&")
  }

  function request() {
    if (!result?.path) return
    fetch(result.path + "?" + createStringQuery({ ...query, page }))
      .then(res => res.json())
      .then(setResult)
  }

  function forward() {
    setPage(p => p + 1)
    request()
  }
  function backwards() {
    setPage(p => p - 1)
    request()
  }

  useEffect(() => {
    setResult(paginationData)
  }, [paginationData])

  return {
    result,
    forward,
    backwards,
    canGoForward: Boolean(result?.next_page_url),
    canGoBackwards: Boolean(result?.prev_page_url)
  }
}

export default Links
