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
    <div className="storage">
      <h2>Просмотреть склад</h2>
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
        <button className="form-element__submit" type="submit">Туда</button>
        <label className="storage__page">Page 10</label>
        <button className="form-element__submit" type="submit">Сюда</button>
      </div>
    </div>
  )
}
