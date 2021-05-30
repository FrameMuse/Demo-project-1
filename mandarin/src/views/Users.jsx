import React from 'react'

export default function Users() {
    // Request
    const list = Array(20).fill({

        login: "qwerty",
        pass: "qwerty123",
        role: "admin",
        Storage: "г.Гродно Партизанская 281",

    })
    return (
        <form className="test">
            <div className="storage">
                <div className="form-element">
                    <label className="form-element__label">Поиск по логину:</label>
                    <input className="form-element__input" name="login" type="text"   />
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Роль</th>
                        <th>Склад</th>
                        <th>Удаление</th>

                    </tr>
                    </thead>
                    <tbody>
                    {list.map((good, index) => (
                        <tr key={index}>
                            <td>{good.login}</td>
                            <td>{good.pass}</td>
                            <td>{good.role}</td>
                            <td>{good.Storage}</td>
                            <td><center> <button className="form-element__submit form-element__submit--remove_users" type="submit">Удалить</button></center></td>

                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="storage__buttons">
                    <button className="form-element__submit" type="submit">Назад</button>
                    <label className="storage__page">Страница 10</label>
                    <button className="form-element__submit" type="submit">Вперед</button>
                </div>
            </div>
        </form>
    )
}
