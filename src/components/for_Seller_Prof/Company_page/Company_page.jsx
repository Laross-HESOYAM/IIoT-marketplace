import React, { useState } from 'react'
import s from './Company_page.module.css'
import { Button, Input, Select } from 'antd'
import GrupLogoCompany from '../../../image/grupCompany.svg'
const Company_page = () => {
  const [fileIMG, setFileIMG] = useState(GrupLogoCompany)
  const [textDescription, setTextDescription] =
    useState(`Более 13 лет мы успешно осуществляем комплексные поставки промышленного инструмента и техоснастки. На сегодняшний день наша компания является одним из лидеров рынка по поставкам инструмента в России.
Наши клиенты — это предприятия, занятые производством в различных отраслях промышленности на территории РФ.`)
  const { TextArea } = Input
  function handleChange(e) {
    console.log(e.target.files)
    setFileIMG(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Страница компании</span>
        <Button>Предварительный просмотр</Button>
      </div>
      <div className={s.formInfo}>
        <span className="fontSiz_16_400Blc">
          Страница о Вашей компании доступна для поиска и просмотра всем
          посетителям маркетплейса. Данные платформа взяла с Вашего сайта. Вы
          можете редактировать информацию по Вашему усмотрению.
        </span>
        <span className="fontSiz_16_500">Логотип</span>
        <img src={fileIMG} className={s.imgLogo} />
        <label className={s.labelFile}>
          <span className="fontSiz_16_400Blc">Загрузить другой</span>
          <input type="file" onChange={handleChange} />
        </label>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">Название компании</span>
          <Input
            className={s.inputComp}
            // placeholder="Имя пользователя"
            allowClear
            type="text"
            name="companyname"
          />
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">Описание</span>
          <TextArea
            className={s.inputArea}
            placeholder="textarea with clear icon"
            value={textDescription}
          />
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">Юридический адрес</span>
          <Input
            className={s.inputComp}
            // placeholder="Имя пользователя"
            allowClear
            type="text"
            name="urAdress"
          />
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">Фактический адрес</span>
          <Input
            className={s.inputComp}
            // placeholder="Имя пользователя"
            allowClear
            type="text"
            name="facAdress"
          />
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">ОГРН</span>
          <Input
            className={s.inputComp}
            // placeholder="Имя пользователя"
            allowClear
            type="text"
            name="ogrn"
          />
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">КПП</span>
          <Input
            className={s.inputComp}
            // placeholder="Имя пользователя"
            allowClear
            type="text"
            name="kpp"
          />
        </div>
        <div>
          <input type="checkbox" name="radio" id="rememb" />
          <label
            htmlFor="rememb"
            style={{ paddingLeft: '8px', color: '#000' }}
            className="fontSiz_16_400Blc"
          >
            Готовы принимать заказы на изготовления инструмента и оснастки
          </label>
        </div>
        <div className={s.chMFl}>
          <span className="fontSiz_16_400Blc">
            Категории, которые Вы можете изготавливать
          </span>

          <Select
            defaultValue="lucy"
            style={{
              width: '100%',
              height: 40,
            }}
            className="selectCompany"
            // onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
        </div>
        <div>
          <input type="checkbox" name="radio" id="rememb" />
          <label
            htmlFor="rememb"
            style={{ paddingLeft: '8px', color: '#000' }}
            className="fontSiz_16_400Blc"
          >
            Готовы оказывать услуги по ремонту инструмента и оснастки
          </label>
        </div>
        <Button className={s.btnSaveCom}>Сохранить</Button>
      </div>
    </div>
  )
}

export default Company_page
