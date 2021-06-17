import { createContext } from "react"
import ReactDom from "react-dom"
import App from "./App"
import Links from "./LINKS"

export const UserContext = createContext()
const userRequest = Links.getUserInfo()
userRequest.then(user => {
  ReactDom.render(
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>,
    document.getElementById("root")
  )
})