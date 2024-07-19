import React, { useState } from 'react'
import s from './CatalogClass.module.css'
import {
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Button, Menu, Checkbox, Radio } from 'antd'

import SVGstate from '../../../image/Stat.svg'
import SVGfavorite from '../../../image/Favorites.svg'
import Star_violet from '../../../image/Star_violet.svg'
import { Link } from 'react-router-dom'
const CatalogClass = ({ switchClass }) => {
  const [sort, setSort] = useState('wrap')
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const onChange2 = (e) => {
    console.log('radio checked', e.target.value)
  }
  const onClick = (e) => {
    // setSelectCategor(e.key)
    console.log('click ', e.key)
  }
  const items = [
    {
      key: 'sub1',
      label: <span className="fontSiz_16_400Blc">Сначала популярные</span>,
      // icon: <MailOutlined />,
      children: [
        {
          key: '1',
          label: (
            <Checkbox onChange={onChange}>
              <div className={s.chealFldiv}>
                <span className="fontSiz_16_400Blc">Туламаш</span>
                <span
                  className="fontSiz_16_400Blc"
                  style={{ color: '#ACAEB0' }}
                >
                  6
                </span>
              </div>
            </Checkbox>
          ),
        },
        {
          key: '2',
          label: (
            <Checkbox onChange={onChange}>
              <div className={s.chealFldiv}>
                <span className="fontSiz_16_400Blc">Управдом</span>
                <span
                  className="fontSiz_16_400Blc"
                  style={{ color: '#ACAEB0' }}
                >
                  3
                </span>
              </div>
            </Checkbox>
          ),
        },
        {
          key: '3',
          label: (
            <Checkbox onChange={onChange}>
              <div className={s.chealFldiv}>
                <span className="fontSiz_16_400Blc">Пневмо-трейд</span>
                <span
                  className="fontSiz_16_400Blc"
                  style={{ color: '#ACAEB0' }}
                >
                  1
                </span>
              </div>
            </Checkbox>
          ),
        },
        {
          key: '4',
          label: (
            <Checkbox onChange={onChange}>
              <div className={s.chealFldiv}>
                <span className="fontSiz_16_400Blc">Волжский</span>
                <span
                  className="fontSiz_16_400Blc"
                  style={{ color: '#ACAEB0' }}
                >
                  13
                </span>
              </div>
            </Checkbox>
          ),
        },
        {
          key: '5',
          label: (
            <Checkbox onChange={onChange}>
              <div className={s.chealFldiv}>
                <span className="fontSiz_16_400Blc">ГК Инструмент</span>
                <span
                  className="fontSiz_16_400Blc"
                  style={{ color: '#ACAEB0' }}
                >
                  4
                </span>
              </div>
            </Checkbox>
          ),
        },
      ],
    },
    {
      key: 'sub2',
      label: <span className="fontSiz_16_400Blc">Материал</span>,
      // icon: <MailOutlined />,
      children: [
        {
          key: '6',
          label: (
            <Checkbox onChange={onChange}>
              <span className="fontSiz_16_400Blc">Материал</span>
            </Checkbox>
          ),
        },
        {
          key: '7',
          label: (
            <Checkbox onChange={onChange}>
              <span className="fontSiz_16_400Blc">Материал</span>
            </Checkbox>
          ),
        },
        {
          key: '8',
          label: (
            <Checkbox onChange={onChange}>
              <span className="fontSiz_16_400Blc">Материал</span>
            </Checkbox>
          ),
        },
      ],
    },
  ]
  return (
    <div className={s.mainDiv}>
      <div className={s.flSpan}>
        <span className="fontSiz_32_500">{switchClass}</span>
        <span>1234</span>
      </div>
      <div className={s.wrapp}>
        <div style={{ borderRight: '1px solid #ACAEB0' }}>
          <Menu
            className={s.menuCatal}
            onClick={onClick}
            style={{
              width: '250px',
              background: 'transparent',
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </div>
        <div className={s.leftCard}>
          <div style={{ width: '70.3vw' }}>
            <div className={s.flTitl}>
              <span className="fontSiz_16_400Blc">Сначала популярные</span>
              <Radio.Group
                defaultValue="wrap"
                buttonStyle="solid"
                onChange={onChange2}
              >
                <Radio.Button value="line">
                  <MenuOutlined />
                </Radio.Button>
                <Radio.Button value="wrap">
                  <AppstoreOutlined size={'10px'} />
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className={s.mainCards}>
              {/* <div className={s.flTitl}>
              <span className="fontSiz_16_400Blc">Сначала популярные</span>
              <Button>SD</Button>
            </div> */}
              {Array.from(Array(18)).map((el) => {
                return (
                  <div className={s.sliderDivMain}>
                    <div style={{ width: '100%' }}>
                      <span className="fontSiz_12_400">
                        Артикул 00001518353
                      </span>
                    </div>
                    <div className={s.boxImgStar}>
                      <img
                        src={require('../../../image/freza2.png')}
                        alt="df"
                        style={{ height: '140px' }}
                      />
                      <div>
                        <img src={SVGfavorite} alt="React Logo" />
                        <img src={SVGstate} alt="React Logo" />
                      </div>
                    </div>
                    <div>
                      <div className={s.starFlex}>
                        <div className={s.stChFlex}>
                          {Array.from(Array(5)).map((el, i) => {
                            return (
                              <img src={Star_violet} alt="React Logo" key={i} />
                            )
                          })}
                        </div>
                        <div>
                          <span className="fontSiz_12_400">5 отзывов</span>
                        </div>
                      </div>

                      <div className={s.slTexLink}>
                        <span style={{ overflow: 'hidden' }}>
                          Фреза концевая
                        </span>
                        <Link to={`/categories/1`}>Туламаш</Link>
                      </div>
                    </div>
                    <div className={s.btnStar}>
                      {`100 ₽`}
                      <Button className={s.addBasket}>В корзину</Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogClass
