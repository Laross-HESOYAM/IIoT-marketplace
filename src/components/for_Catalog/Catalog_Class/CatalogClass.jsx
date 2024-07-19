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
    setSort(e.target.value)
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
            <div
              className={`${s.mainCards} ${
                sort === 'line' ? s.minCardsLine : ''
              }`}
            >
              {Array.from(Array(18)).map((el) => {
                return (
                  <div
                    className={`${s.sliderDivMain} ${
                      sort === 'line' ? s.slidRow : s.slidColom
                    }`}
                  >
                    <div
                      style={{
                        width: '100%',
                        display: sort === 'line' && 'none',
                      }}
                    >
                      <span className="fontSiz_12_400">
                        Артикул 00001518353
                      </span>
                    </div>
                    <div
                      className={`${s.boxImgStar} ${
                        sort == 'line' && s.boxImgLine
                      }`}
                    >
                      <img
                        src={require('../../../image/freza2.png')}
                        alt="df"
                        style={{ height: sort === 'line' ? '100px' : '140px' }}
                      />
                      <div
                        style={{
                          display: sort === 'line' ? 'none' : 'block',
                        }}
                      >
                        <img src={SVGfavorite} alt="React Logo" />
                        <img src={SVGstate} alt="React Logo" />
                      </div>
                    </div>
                    <div style={{ width: '65%' }}>
                      <div
                        className={`${sort === 'line' ? s.sortBl : s.sortNone}`}
                      >
                        <span className={`fontSiz_12_400 `}>
                          Артикул 00001518353
                        </span>
                      </div>
                      <div
                        className={`${s.starFlex}  ${
                          sort === 'line' && s.flexStart
                        } `}
                      >
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

                      <div
                        className={`${s.slTexLink}  ${
                          sort === 'line' && s.flexStart
                        }`}
                      >
                        <span style={{ overflow: 'hidden' }}>
                          {sort === 'line'
                            ? 'Фреза концевая цх ф 6.0х 13х 50 4-п Р6М5 хв. 6мм'
                            : 'Фреза концевая'}
                        </span>
                        <Link to={`/categories/1`}>Туламаш</Link>
                      </div>
                    </div>
                    <div
                      className={`${s.btnStar} ${
                        sort === 'line' ? s.btnStartLine : s.btnStartColum
                      }`}
                    >
                      <span>{`100 ₽`}</span>
                      <span
                        className="fontSiz_12_400"
                        style={{
                          color: '#8D24F8',
                          display: sort === 'line' ? 'block' : 'none',
                        }}
                      >
                        +2 предложения от 20 000 ₽
                      </span>
                      <div className={sort === 'line' ? s.flBtnLine : ''}>
                        <Button
                          className={s.addBasket}
                          style={{ width: sort == 'line' ? '320px' : '100px' }}
                        >
                          В корзину
                        </Button>
                        <div
                          style={{
                            display: sort === 'line' ? 'block' : 'none',
                          }}
                        >
                          <img src={SVGfavorite} alt="React Logo" />
                          <img src={SVGstate} alt="React Logo" />
                        </div>
                      </div>
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
