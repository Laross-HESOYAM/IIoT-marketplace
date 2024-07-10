import React from 'react'
import s from './_for_help.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
const Manufacturer_Instructions = () => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_24_500">Инструкция для производителя</span>
      <span className="fontSiz_16_500">
        Что дает платформа для производителя?
      </span>
      <ul className={`${s.ulTabs} fontSiz_16_400Blc`}>
        <li>Дополнительный целевой трафик и увеличения заказов</li>
        <li>Ваш бренд среди ведущих производителей</li>
        <li>Построение партнерских отношений с коллегами по отрасли</li>
      </ul>
      <Link className="fontSiz_16_400Blc">Подробнее о проекте</Link>
      <span className="fontSiz_16_500">
        Как производителю присоединиться к платформе?
      </span>
      <span className="fontSiz_16_400Blc">
        Любой производитель, будь то небольшой завод по производству инструмента
        по ГОСТу или мировой бренд, может зарегистрироваться на _________.
        Единственное условие — быть производителем или правообладателем бренда.
        Чтобы зарегистрироваться, заполните
        <Link>форму заявки производителя</Link>. Наши сотрудники оперативно
        свяжуться с Вами для уточнения деталей и добавления бренда на площадку.
        После активации Вашей заявки и добавления бренда Вы получите
        соответствующий email с Вашим логином и сгенерированным паролем (пароль
        Вы можете поменять в любой момент).
      </span>
      <span className="fontSiz_16_500">Правила добавления товаров</span>
      <span
        className="fontSiz_16_400Blc"
        style={{ color: 'rgb(123, 124, 125)' }}
      >
        Личный кабинет производителя <br></br> После получения email с Вашим
        логином и паролем Вы можете авторизоваться и войти в свой личный
        кабинет.<br></br> В разделе “Профиль компании” своего личного кабинета
        Вы можете:<br></br>
        &shy; &shy; &bull; Просматривать реквизиты своей компании и контактные
        данные;
        <br></br>
        &shy; &shy; &bull; Добавлять точки самовывоза, если от Вашего склада
        можно отгружать заказанные товары; <br></br> Услуги по продвижению
        бренда
        <br></br> Enex может стать дополнительным каналом продвижения Вашего
        бренда в Интернете!<br></br> Специалисты Enex могут самостоятельно
        провести все работы, включающие в себя:
        <br></br>
        &shy; &shy; &bull; создание информационных страниц о бренде (страница
        компании, новости, маркетинговые материалы)<br></br>
        &shy; &shy; &bull; обработку и выгрузку всего каталога<br></br>
        &shy; &shy; &bull; рекламу на главной странице и в каталоге Enex Итогом
        работ будут высокие показатели просмотров и постоянные заявки на Ваши
        товары.<br></br>
        <span className={s.spanFlex}>
          Зайдите в раздел <Link>Продвижение бренда</Link> за подробностями.
          <br></br>
          <Link>Презентация услуг по продвижению бренда.</Link>
          <br></br> Страница компани
        </span>
        В <Link>разделе “Страница компании”</Link> Вы можете создавать и
        редактировать страницу компании, а также публиковать свои новости. Для
        создания страницы:<br></br>
        &shy; &shy; 1. Загрузите логотип своей компании (желательно на
        прозрачном фоне);
        <br></br>
        &shy; &shy; 2. Загрузите фоновое изображение и небольшой текст о своей
        компании для визитной карточки, которая будет отображаться
        <Link>блоке “Производители”;</Link>
        <br></br>
        &shy; &shy; 3. Заполните информацию для детальной страницы компании,
        которая будет доступна при поиске всем посетителям сайта;<br></br>
        Для создания новости:<br></br>
        &shy; &shy; 1. Зайдите в раздел “Страница компании” в личном кабинете и
        выберите таб “Новости компании”; 2.Нажмите на кнопку “+ создать новость”
        - у Вас откроется окно создания и редактирования новости;
        <br></br>
        &shy; &shy; 3. Заполните заголовок, анонс и детальный текст для новости,
        а также загрузите картинку для баннера;<br></br>
        &shy; &shy; 4. Сохраните внесенные изменения и любуйтесь своим творением
        в 
        <Link>разделе новостей!</Link> <br></br>
        &shy; &shy; 5. После публикации, новость будет доступна к поиску и
        просмотру всеми посетителями площадки Enex.<br></br>В своем личном
        кабинете производитель может найти всю историю заказов от покупателей, а
        также заявки и переписки с покупателями.<br></br>
        Загрузка каталога на площадку Enex<br></br>В личном кабинете в 
        <Link>разделе “Загрузка товаров”</Link> есть весь необходимый функционал
        для загрузки каталога.  Сначала скачайте шаблон файла каталога
        (представлен в этом же разделе). В шаблоне файла каталога Вы найдете
        инструкцию по работе с файлом. Прочитайте инструкцию и заполните файл,
        согласно ей. Затем загрузите заполненный файл через область загрузки в
        разделе “Загрузка товаров”.<br></br>
        После успешной загрузки файла и дальнейшей его обработки нашими
        специалистами на сайте появятся Ваши товары! Вы получите соответствующий
        email об успешной выгрузке каталога на площадку Enex с примерами ссылок
        на Ваши товары. Видео-инструкция по работе производителя в личном
        кабинете и заполнению шаблона файла каталога.<br></br>
        Открытие продаж на Enex<br></br>
        Любой производитель может присутствовать на площадке исключительно в
        маркетинговых целях, не открывая свои товары к заказам непосредственно
        на маркетплейсе Enex. В этом случае рекомендуется просить дилеров
        регистрироваться на Enex и оценивать Ваши товары.<br></br>
        Так покупатели смогут заказывать Ваши товары. Если Вы приняли решение
        самостоятельно торговать на площадке Enex, то внимательно ознакомьтесь
        с <Link>условиями сайта.</Link>
        <br></br>
        Согласно им, существуют 2 схемы взаимодействия:<br></br>
        &shy; &shy; 1. <Link>Схема заказов по условиям агентирования</Link>
        <br></br>
        &shy; &shy; 2. <Link>Схема заказов по условиям реализации</Link>
        <br></br>
        При любой схеме заказов, доставка организовывается сотрудниками Enex с
        помощью транспортной компании “Деловые линии”. Вам остается просто
        подготовить заказанный товар на своём складе или привезти его в
        ближайший терминал “Деловых линий”. Если Вы сами будете оформлять заказы
        в компании “Деловые линии”, ставьте получателем клиента (все данные
        предоставляются с каждым заказом), а плательщиком ООО “Энекс”.<br></br>
        Функционал открытия продаж и установки суммы минимального заказа (если
        такое ограничение будет) появится в личном кабинете в 
        <Link>разделе “Загрузка товаров”</Link> после успешной выгрузки
        каталога.<br></br>
        Документооборот с покупателем <br></br>
        На маркетплейсе Enex торгуют разные поставщики инструмента и
        оборудования. Это могут быть и производители, и торговые компании. Также
        сам Enex может выступать продавцом для некоторых товаров.<br></br>
        Если производитель сам торгует на площадке, то он действует в рамках
        условий агентирования, если же сам Enex выступает продавцом, то
        производитель сотрудничает с Enex по условиям реализации. 
        <Link>Читать подробнее об условиях агентирования и реализации.</Link>
        <br></br>
        Если поставщик товара - производитель (условия агентирования)<br></br>
        Если в качестве поставщика товара выступает производитель товара, то
        маркетплейс Enex не является стороной сделки. В этом случае договор
        купли-продажи заключается  между покупателем и производителем товара
        (либо торговой компанией).<br></br> 
        <Link>Подробнее о правилах продажи и доставки.</Link>
        <br></br>
        Отгрузочные документы на товар (счета-фактуры, товарные накладные,
        универсальные передаточные документы) формирует производитель, указывая
        в них свои реквизиты, и передает эти документы покупателю вместе с
        товаром.<br></br>
        Цена товара в отгрузочных документах должна соответствовать оплаченной
        покупателем сумме за товар. При этом удержание агентом агентского
        вознаграждения происходит в рамках договорных отношений с
        производителем.<br></br>
        Если при заказе товара покупатель частично оплатил его бонусными
        рублями, доступными на площадке Enex, то производитель должен снизить
        цену товара на величину предоставленной скидки. В этом случае агент
        обязуется пересчитать величину агентского вознаграждения, компенсировав
        производителю уменьшение цены товара из-за использованной скидки. В
        отгрузочных документах при этом указывается уменьшенная итоговая
        стоимость товара с учетом примененной скидки. Таким образом, все
        издержки за предоставление скидки агентом берет на себя сам же агент,
        уменьшая свое агентское вознаграждение. 
        <Link>
          Для информации общая схема заказов с учетом примененной скидки.
        </Link>
        <br></br>
        Если поставщик товара - Enex (условия реализации)<br></br>
        Для некоторых товаров поставщиком выступает Enex. В этом случае
        отгрузочные документы формирует маркетплейс и направляет покупателю. При
        этом фактические действия по отгрузке Товара, его гарантийному
        обслуживанию, устранению дефектов товара, его замене, осуществляет
        производитель.<br></br>Я НЕ НАШЕЛ ОТВЕТА НА СВОЙ ВОПРОС
      </span>
      <Button className={s.btnTabs}>Я не нашел ответ на свой вопрос</Button>
    </div>
  )
}

export default Manufacturer_Instructions
