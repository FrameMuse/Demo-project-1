import React from 'react'

export default function RemoveGood() {
  function submit(event) {
    event.preventDefault()
    const elements = event.currentTarget.elements
    if (elements) {
      const boxCount = elements.namedItem("box-count")
      const cell = elements.namedItem("cell")
      console.table([boxCount.value, cell.value])
    }
  }

  const list = [...Array(100)].map((_cell, index) => ({
    index,
    full: 0
  }))
  list.pop()
  list.push({
    index: 20,
    full: 5
  })
  return (
    <form className="test" onSubmit={submit}>
      <h2 className="form-title">Удалить товар со склада</h2>
      <div className="form-element">
        <label className="form-element__label">Адрес склада:</label>
        <input className="form-element__input" name="storage-name" type="text" value="Storage" disabled />
      </div>
      <div className="form-element">
        <label className="form-element__label">Введите кол-во ящиков:</label>
        <input className="form-element__input" name="box-count" type="number" min="0" max="24" placeholder="Ящики" />
      </div>
      <div className="form-element">
        <label className="form-element__label">Выберите ячейку на складе:</label>
        <Cells list={list} />
      </div>
      <button className="form-element__submit form-element__submit--remove" type="submit">Удалить</button>
    </form>
  )
}

function Cells(props) {
  return (
    <div className="storage-cells">
      {props.list.map((cell, index) => (
        <label className="storage-cells__cell storage-cells__cell--remove">
          <input type="radio" name="cell" value={cell.index} disabled={!cell.full} key={index} />
          <div />
          <span>{cell.full}</span>
        </label>
      ))}
    </div>
  )
}
