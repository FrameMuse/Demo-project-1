import React from 'react'

export default function Adduser() {
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
            <h2 className="form-title">Добавление нового пользователя</h2>
            <div className="form-element">
                <label className="form-element__label_auth">Логин:</label>
                <input className="form-element__input_login" name="login" type="text" placeholder="Логин" />
            </div>
            <div className="form-element">
                <label className="form-element__label_auth">Пароль:</label>
                <input className="form-element__input_login" name="password" type="password" placeholder="Пароль" />
            </div>
            <div className="form-element">
                <label className="form-element__label_auth">Роль:</label>
                <select className="form-element__input_add" name="Роль">
                    <option value="admin">Админ</option>
                    <option value="manager">Менеджер</option>
                    <option value="gruz">Грузчик</option>
                </select>
                </div>

            <div className="form-element">
                <label className="form-element__label_auth">Склад:</label>
                <select className="form-element__input_add" name="Роль">
                    <option value="a1">г.Гродно Замковая 71</option>
                    <option value="a2">г.Гродно Партизанская 28</option>
                    <option value="a3">г.Гродно Советская 21</option>
                    <option value="a4">г.Гродно Элизы Ожешко 47</option>
                </select>
            </div>
            <button className="form-element__submit" type="submit">Добавить</button>
        </form>
    )
}