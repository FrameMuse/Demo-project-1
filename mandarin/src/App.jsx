import React, { StrictMode } from 'react'
// import { Route } from "react-router-dom"
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import AddGood from './views/AddGood'
import "./main.css"
import RemoveGood from './views/RemoveGood'
import Storage from './views/Storage'
import Reports from './views/Reports'
import СhangePassword from './views/СhangePassword'
import About from './views/About'
import Auth from './views/Auth'
import Users from './views/Users'
import Adduser from './views/Adduser'

export default function App() {
  return (

    <StrictMode>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  )
}

function Header() {
  return (
    <header>
      <NavLink to="/about" className="logo">ОАО "Молочный Мир"</NavLink>
      <img width="140" height="60" src="../1234.svg" />
      <nav>
        <NavLink to="/adduser">Добавление пользователя</NavLink >
        <NavLink to="/users">Управление пользователями</NavLink >
        <NavLink to="/add-good">Добавить товар на склад</NavLink >
        <NavLink to="/remove-good">Удалить товар со склада</NavLink >
        <NavLink to="/storage">Просмотреть склад</NavLink >
        <NavLink to="/reports">Отчёты</NavLink >
        <NavLink to="/change-password">Сменить пароль</NavLink >
        <NavLink to="/auth">Выход</NavLink >
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/adduser" render={props => <Adduser {...props} />} />
        <Route path="/users" render={props => <Users {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/add-good" render={props => <AddGood {...props} />} />
        <Route path="/remove-good" render={props => <RemoveGood {...props} />} />
        <Route path="/storage" render={props => <Storage {...props} />} />
        <Route path="/reports" render={props => <Reports {...props} />} />
        <Route path="/change-password" render={props => <СhangePassword  {...props} />} />
        <Route path="/auth" render={props => <Auth  {...props} />} />
      </Switch>
    </main>
  )
}

const Footer = () => (
  <footer className="footer">
    <h1 align="center">ОАО Молочный Мир 2021 <img className="img" src="../123.png" /></h1>


  </footer>
);
