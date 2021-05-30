import React from 'react'

export default function Storage() {
  // Request
  const list = Array(20).fill({
    cell: 1,
    name: "name",
    filler: "Milk",
    boxCount: 6,
    created_at: "2020.12.01"
  })
  return (
      <form className="test">
    <div className="storage">
      <div className="form-element">
        <label className="form-element__label">Адрес склада:</label>
        <input className="form-element__input" name="storage-name" type="text" value="Storage" disabled />
      </div>
      <table>
        <thead>
          <tr>
            <th>Ячейка</th>
            <th>Наименование</th>
            <th>Наполнитель</th>
            <th>Кол-во ящиков</th>
            <th>Дата добавления</th>
          </tr>
        </thead>
        <tbody>
          {list.map((good, index) => (
            <tr key={index}>
              <td>{good.cell}</td>
              <td>{good.name}</td>
              <td>{good.filler}</td>
              <td>{good.boxCount}</td>
              <td>{good.created_at}</td>
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
