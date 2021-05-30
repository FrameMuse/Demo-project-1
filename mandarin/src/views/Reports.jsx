import React from 'react'

export default function Reports() {
  return (
    <form className="test">
      <div className="reports">
      <h2>Отчёты</h2>
      <div className="reports__buttons">
        <button className="form-element__submit" disabled type="submit">Общее кол-во товара на всех складах</button>
        <div>
          <button className="form-element__submit" type="submit">Кол-во реализованного за установленный период</button>
          <input type="date" />
          <input type="date" />
        </div>
        <button className="form-element__submit" type="submit">Общее кол-во товара на складе</button>
        <button className="form-element__submit" type="submit">Оборачиваемость за месяц</button>
      </div>
    </div>
    </form>
  )
}
