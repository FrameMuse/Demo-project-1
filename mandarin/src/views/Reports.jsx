import React from 'react'

export default function Reports() {
  return (
    <div className="reports">
      <h2>Отчёты</h2>
      <div className="reports__buttons">
        <button className="form-element__submit" disabled type="submit">1 кнопка</button>
        <div>
          <button className="form-element__submit" type="submit">2 кнопка</button>
          <input type="date" />
          <input type="date" />
        </div>
        <button className="form-element__submit form-element__submit--remove" type="submit">3 кнопка</button>
        <button className="form-element__submit" type="submit">4 кнопка</button>
      </div>
    </div>
  )
}
