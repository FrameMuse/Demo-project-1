import React from 'react'

export default function СhangePassword() {
  function submit(event) {
    event.preventDefault()
    const elements = event.currentTarget.elements
    if (elements) {
      const password = elements.namedItem("password")
      console.table([password.value])
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2 className="form-title">Сменить пароль</h2>
      <div className="form-element">
        <label className="form-element__label">Введите новый пароль:</label>
        <input className="form-element__input" name="password" type="text" placeholder="Новый пароль" />
      </div>
      <button className="form-element__submit" type="submit">Изменить</button>
    </form>
  )
}
