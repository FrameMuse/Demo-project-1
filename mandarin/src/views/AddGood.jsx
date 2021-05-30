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

  const list = [...Array(100)].map((_cell, index) => ({
    index,
    full: 0
  }))
  list.pop()
  list.push({
    index: 100,
    full: 5
  })
  return (
    <form className="test" onSubmit={submit}>
      <h2 className="form-title">Добавить товар на склад</h2>
      <div className="form-element">
        <label className="form-element__label">Адрес склада:</label>
        <input className="form-element__input" name="storage-name" type="text" value="Storage" disabled />
      </div>
      <div className="form-element">
        <label className="form-element__label">Выберите товар:</label>
        <select className="form-element__input" name="icecream-type">
          <option disabled>Плoмбир «ГороденЪ» в вафельном сахарном рожке</option>
          <option value="cup-vanilla">Ванильное</option>
          <option value="cup-chocolate">Шоколадное</option>
            <option value="cup-brulle">Крем-брюле</option>
          <option disabled>Десерт замороженный из сыворотки «SummerTime»</option>
          <option value="ice-watermelon">Арбуз</option>
          <option value="sticky-multifruct">Мультифрукт </option>
            <option disabled>Мороженое «Пломбир» в крупной фасовке»</option>
            <option value="big-cacao">Какао</option>
            <option value="big-injir">Инжир</option>
            <option value="big-vanilla">Ваниль</option>
            <option disabled>Мороженое "ГороденЪ"</option>
            <option value="gorod-vanilla">Ваниль</option>
            <option value="gorod-cacao">Какао</option>
            <option disabled>Мороженое с изюмом в вафельном стаканчике</option>
            <option value="izum-cacao">Изюм-какао</option>
            <option value="izum-vanilla">Изюм-ваниль</option>
            <option disabled>Мороженое "Пломбир" эскимо</option>
            <option value="sticky-vanilla">Ваниль</option>
            <option value="sticky-cacao">Какао</option>
            <option value="sticky-plombir">Пломбир</option>
            <option disabled>Мороженое "Узнай мир"</option>
            <option value="world-caramel">Соленая карамель и курага</option>
            <option value="choco-cherry">Темный шоколад и вишня</option>
            <option value="banana">Банан и фундук</option>
            <option disabled>Мороженое «Пушок» в вафельном стаканчике</option>
            <option value="cat-plombir">Пломбир</option>
            <option value="cat-cacao">Какао</option>
            <option disabled>Мороженое «Сливочное» в вафельном стаканчике факел</option>
            <option value="torch-plombir">Пломбир</option>
            <option value="torch-cacao">Какао</option>
            <option disabled>Мороженое пломбир «Ice time» в вафельном сахарном рожке</option>
            <option value="ice-caramel">Карамель</option>
            <option value="ice-mandarin">Мандарин-апельсин</option>
            <option value="ice-greip">Грейпфрукт</option>
            <option value="ice-mokko">Мокко</option>
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
