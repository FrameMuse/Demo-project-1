import React from 'react'

export default function AddGood() {
  function submit(event) {
    event.preventDefault()
    const elements = event.currentTarget.elements
    if (elements) {
      const iceCreamType = elements.namedItem("icecream-type")
      const boxCount = elements.namedItem("box-count")
      const cell = elements.namedItem("cell")
      console.table([iceCreamType.value, boxCount.value, cell.value])
    }
  }

  const list = [...Array(20)].map((_cell, index) => ({
    index,
    full: 0
  }))
  list.pop()
  list.push({
    index: 20,
    full: 5
  })
  return (
    <form className="form" onSubmit={submit}>
      <h2 className="form-title">Добавить товар на склад</h2>
      <div className="form-element">
        <label className="form-element__label">Название склада:</label>
        <input className="form-element__input" name="storage-name" type="text" value="Storage" disabled />
      </div>
      <div className="form-element">
        <label className="form-element__label">Выберите товар:</label>
        <select className="form-element__input" name="icecream-type">
          <option disabled>Мороженое в стаканчике</option>
          <option value="cup-milk">Пломбир</option>
          <option value="cup-chocolate">Шоколадное</option>
          <option disabled>Мороженое на палочке</option>
          <option value="sticky-ice">Лёд</option>
          <option value="sticky-vanila">Ванильное</option>
        </select>
      </div>
      <div className="form-element">
        <label className="form-element__label">Введите кол-во ящиков:</label>
        <input className="form-element__input" name="box-count" type="number" min="0" max="24" placeholder="Ящики" />
      </div>
      <div className="form-element">
        <label className="form-element__label">Выберите ячейку на складе:</label>
        <Cells list={list} />
      </div>
      <button className="form-element__submit" type="submit">Добавить</button>
    </form>
  )
}

function Cells(props) {
  return (
    <div className="storage-cells">
      {props.list.map((cell, index) => (
        <label className="storage-cells__cell">
          <input type="radio" name="cell" value={cell.index} disabled={cell.full} key={index} />
          <div />
          <span>{cell.full}</span>
        </label>
      ))}
    </div>
  )
}
