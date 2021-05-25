import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h2> Удаление продукции со склада </h2>
      <p>
          Автоматизированный учет склада предприятия ОАО "Молочный мир"
      </p>
        <form>
            <label>
                Ваш склад:
                <input type="text" name="name" />
            </label>

            <label>
               Введите ячейку:
                <input type="text" name="amount" />
            </label>

            <label>
                Введите количество ящиков товара:
                <input type="text" name="amount" />

            </label>



            <input type="submit" value="Удалить" />
        </form>

    </div>

  )
}

export default AboutPage
