/*
* Copyright Lolizan  2021  https://vk.com/lolizan
*/

import { useState, useEffect } from "react"
import { GetUsersRequest } from "./interfaces"

namespace Links {
  const fetchHost = "http://localhost"
  const fetchConfig: RequestInit = {}
  async function request(endpoint: string, body?: any) {
    const config = { ...fetchConfig, body }
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
    const payload = await request("/auth", {
      name, password
    })

    return handleError(payload)
  }

  export async function addUser(name: any, password: any, role: "admin" | "", warehouse_id: number) {
    const payload = await request("/addUser", {
      name, password, role, warehouse_id
    })

    return handleError(payload)
  }

  export async function removeUser(user_id: number) {
    const payload = await request("/removeUser", {
      user_id
    })

    return handleError(payload)
  }

  export async function getUsers(): Promise<GetUsersRequest> {
    const payload = await request("/users")

    return payload
  }
}

export function usePromise<T = any>(promise: Promise<T>): T {
  const [result, setResult] = useState(null)

  useEffect(() => {
    promise.then(setResult)
  }, [promise])

  return result
}

export default Links
