import React from 'react'

export default function Auth() {
    function submit(event) {
        event.preventDefault()
        const elements = event.currentTarget.elements
        if (elements) {
            const password = elements.namedItem("password")
            console.table([password.value])
        }
    }

    return (
        <form className="test" onSubmit={submit}>
            <h2 className="form-title">Авторизация</h2>
            <div className="form-element">
                <label className="form-element__label_auth">Логин:</label>
                <input className="form-element__input_login" name="login" type="text" placeholder="Логин" />
            </div>
            <div className="form-element">
                <label className="form-element__label_auth">Пароль:</label>
                <input className="form-element__input_login" name="password" type="password" placeholder="Пароль" />
            </div>
            <button className="form-element__submit" type="submit">Войти</button>
        </form>
    )
}
