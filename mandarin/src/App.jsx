import React, { StrictMode } from 'react'
// import { Route } from "react-router-dom"
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import AddGood from './views/AddGood'
import "./main.css"
import RemoveGood from './views/RemoveGood'
import Storage from './views/Storage'
import Reports from './views/Reports'
import СhangePassword from './views/СhangePassword'

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </StrictMode>
  )
}

function Header() {
  return (
    <header>
      <NavLink to="/" className="logo">ОАО "Молочный Мир"</NavLink>
      <nav>
        <NavLink to="/add-good">Добавить товар на склад</NavLink >
        <NavLink to="/remove-good">Удалить товар на склад</NavLink >
        <NavLink to="/storage">Просмотреть склад</NavLink >
        <NavLink to="/reports">Отчёты</NavLink >
        <NavLink to="/change-password">Сменить пароль</NavLink >
        <NavLink to="exit">Выход</NavLink >
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/add-good" render={props => <AddGood {...props} />} />
        <Route path="/remove-good" render={props => <RemoveGood {...props} />} />
        <Route path="/storage" render={props => <Storage {...props} />} />
        <Route path="/reports" render={props => <Reports {...props} />} />
        <Route path="/change-password" render={props => <СhangePassword  {...props} />} />
      </Switch>
    </main>
  )
}
