import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import LOGO from '../../image/market.svg'
import { ROUTES } from '../../Utils/Routes'
import { Link, useNavigate, NavLink } from 'react-router-dom'
// import { Outlet, useNavigate } from 'react-router-dom'
import {
  AppstoreOutlined,
  CloseOutlined,
  EnvironmentOutlined,
  LogoutOutlined,
  ProductOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { Button, Input, Dropdown, ConfigProvider } from 'antd'
import { FactoryIcon } from 'lucide-react'
const { Search } = Input
const Header = ({ setToglClass, toglClass, userName, role }) => {
  const [katalogBTN, setKatalogBTN] = useState(false) //Кнопка для Каталога
  const navigation = useNavigate()
  console.log('localStorage', localStorage)
  console.log('role', role)

  const items = [
    {
      label: (
        <Link to={`/profile/${role}`}>
          <UserOutlined /> Пользователь
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Button
          type="text"
          onClick={() => {
            localStorage.clear()
            navigation('/')
          }}
        >
          <LogoutOutlined /> Выйти
        </Button>
      ),
      key: '1',
    },
  ]
  return (
    <header className={s.mainHeader}>
      <div className={s.divHead1}>
        <div className={s.chldDivH1}>
          {/* <span style={{ color: 'white', paddingRight: '40px' }}>LOGO</span> */}
          <Link to={ROUTES.MAIN}>
            <img src={LOGO} alt="Stuff" />
          </Link>
          <Button
            type="primary"
            icon={!katalogBTN ? <ProductOutlined /> : <CloseOutlined />}
            className={s.btnKatalog}
            to="catalog"
            onClick={() => {
              setKatalogBTN(!katalogBTN)
            }}
          >
            Каталог
          </Button>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: 'transparent',
                  colorBorder: '#DCFF00',
                  colorPrimaryHover: '#DCFF00',
                  colorText: '#fff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  paddingBlock: 6,
                },
                token: {
                  // activeBorderColor: 'red',
                  // activeShadow: 'red',
                  // hoverBorderColor: 'red',
                },
              },
            }}
          >
            <Search
              placeholder="Поиск"
              className={`${s.searchHead} searchHeadG`}
            />
          </ConfigProvider>
        </div>
        <div className={s.chldDivH2}>
          <Button
            className={`${s.btnMoscow} ${s.btnStyle}`}
            type="text"
            icon={<EnvironmentOutlined />}
          >
            Москва
          </Button>
          {!localStorage.access ? (
            <Button
              className={` ${s.btnStyle}`}
              type="text"
              icon={<UserOutlined />}
              onClick={() => setToglClass(!toglClass)}
            >
              Войти
            </Button>
          ) : (
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
              className={` ${s.btnStyle}`}
            >
              <Button type="text" icon={<UserOutlined />}>
                {userName ? userName : 'Войти'}
              </Button>
            </Dropdown>
          )}
          <NavLink
            to={ROUTES.HELP}
            // className={` ${s.btnStyle}`}
            className={({ isActive }) =>
              `${s.btnStyle} ${isActive ? s.activLink : ''}`
            }
            type="text"
          >
            Помощь
          </NavLink>

          <NavLink to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Контакты
            </Button>
          </NavLink>
        </div>
      </div>
      <div className={s.divHead2}>
        <div className={s.grpBtnHed2}>
          <Link to="#">
            <Button
              type="text"
              icon={<FactoryIcon size={19} />}
              className={`${s.factoryBTN} ${s.btnStyle}`}
            >
              Производители
            </Button>
          </Link>
          <Button
            type="text"
            icon={<UserAddOutlined />}
            className={`${s.btnStyle}`}
          >
            Посетители
          </Button>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Запрос на изготовление
            </Button>
          </Link>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Запрос на ремонт
            </Button>
          </Link>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Услуги
            </Button>
          </Link>
        </div>
        <div>
          <Button type="primary" className={s.postavshik}>
            Стать поставщиком
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
