/*
* Copyright Lolizan  2021  https://vk.com/lolizan
*/

import { useState, useEffect } from "react"
import { PaginationData, User } from "./interfaces"

namespace Links {
  const fetchHost = "http://localhost"
  const fetchConfig: RequestInit = {}
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
}

export function usePromise<T = any>(promise: Promise<T>) {
  const [result, setResult] = useState<T | null>(null)

  useEffect(() => {
    promise.then(setResult)
  }, [])

  return result
}

export function usePagination<T = any>(paginationData: PaginationData<T> | null) {
  const [result, setResult] = useState(paginationData)

  function forward() {
    fetch(result?.next_page_url).then(res => res.json()).then(setResult)
  }
  function backwards() {
    fetch(result?.prev_page_url).then(res => res.json()).then(setResult)
  }

  return {
    result,
    forward,
    backwards,
    canGoForward: Boolean(result?.next_page_url),
    canGoBackwards: Boolean(result?.prev_page_url)
  }
}

export default Links
