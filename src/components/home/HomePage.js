import React from 'react'

const HomePage = () => {
  return (
    <div>
          <h2>Добавления товаров на склад</h2>
        <p>
          Автоматизированный учет склада предприятия ОАО "Молочный мир"
      </p>
        <form>
            <label>
                Ваш склад:
                <input type="text" name="name" />
            </label>
            <select>
                <ul>
                    <option value="milk">Молоко</option>
                    <option value="kefir">Кефир</option>
                    <option selected value="icecream">Мороженое</option>
                    <option value="cheese">Сыр</option>
                    <option value="maslo">Масло</option>
                </ul>

            </select>

            <label>
                Выберите тип товара:
                <select>
                    <option value="milk">Молоко</option>
                    <option value="kefir">Кефир</option>
                    <option selected value="icecream">Мороженое</option>
                    <option value="cheese">Сыр</option>
                    <option value="maslo">Масло</option>
                </select>
            </label>

            <label>
                Выберите наименование товара:
                <select>
                    <option value="milk">Плoмбир «ГороденЪ» в вафельном сахарном рожке</option>
                    <option value="kefir">Мороженое «Пломбир» в крупной фасовке</option>
                    <option selected value="icecream">Мороженое</option>
                    <option value="cheese">Сыр</option>
                    <option value="maslo">Масло</option>
                </select>
            </label>
            <label>
                Выберите наполнитель товара:
                <select>
                    <option value="сhoco">Шоколадное</option>
                    <option value="vanilla">Ванильное</option>
                    <option selected value="krem">Крем-брюле</option>
                </select>
            </label>
            <label>
                Введите количество ящиков товара:
                    <input type="text" name="amount" />

            </label>

            <label>
                Выберите ячейку на складе:
                <input type="text" name="cell" />
            </label>

            <input type="submit" value="Добавить" />
        </form>

    </div>

  )
}

export default HomePage
