import React from 'react'
import s from './_for_help.module.css'
import { Button } from 'antd'
const ProblemSolving = () => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_24_500">Решение проблем</span>
      <span>Выберите интересующий вас вопрос или проблему из списка ниже.</span>
      <p className="fontSiz_16_400Blc">
        <b>Поиск и выбор товаров</b> <br></br>
        Как найти товары<br></br>
        Как выглядит карточка товара<br></br>
        Как оставить отзыв о товаре<br></br>
      </p>
      <span>
        <b>Настройка аккаунта</b>
        <br></br>Я забыл логин и пароль<br></br>
      </span>
      <p>
        <b>Выбор магазина</b>
        <br></br>
        Зачем нужна страница магазина<br></br>
        Какие есть требования к отзывам о магазине<br></br>
        Что такое рейтинг магазина<br></br>
        Как пожаловаться на магазин<br></br>
      </p>
      <Button className={s.btnTabs}>Я не нашел ответ на свой вопрос</Button>
    </div>
  )
}

export default ProblemSolving
