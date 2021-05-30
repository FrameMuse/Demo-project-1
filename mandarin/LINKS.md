### Fetch

```JS
const fetchHost = "http://localhost"
const fetchConfig = {}
async function request(endpoint, body) {
  const config = { ...fetchConfig, body }
  const response = await fetch(fetchHost + endpoint, config)
  const payload = await response.json()

  return payload
}
function handleError(payload) {
  if (payload.status !== "success") {
    throw new Error("Success is not in the Response")
  }

  return "success"
}
```

### Login
POST http://localhost/auth
name=admi
password=admin
['status' => 'success']
['status' => 'error']

```JS
export function logIn(name = "admin", password = "admin") {
  const payload = await request("/auth", {
    name, password
  })

  return handleError(payload)
}
```





ADD USER
POST http://localhost/addUser
'name' => $request->name,
'password' => Hash::make($request->password),
'role' => $request->role,
'warehouse_id' => $request->warehouse_id
return ['status' => 'success'];

```JS
export async function addUser(name, password, role, warhouse_id) {
  const payload = await request("/addUser", {
    name, password, role, warhouse_id
  })

  return handleError(payload)
}
```




REMOVE USER
POST http://localhost/removeUser
user_id
return ['status' => 'success'];

```JS
export async function removeUser(user_id) {
  const payload = await request("/removeUser", {
    user_id
  })

  return handleError(payload)
}
```


GET USERS
GET http://localhost/users

```JS
export async function getUsers()
  const payload = await request("/users")

  return payload
}
```
