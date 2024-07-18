import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import LOGO from '../../image/market.svg'
import { ReactComponent as Basket } from '../../image/Basket.svg'
import { ReactComponent as UserICON } from '../../image/User.svg'
import { ReactComponent as StarICON } from '../../image/shabl.svg'
import { ReactComponent as VectICON } from '../../image/Vector.svg'
import { ReactComponent as SignOutICON } from '../../image/Sign_out_squre.svg'

import { ROUTES } from '../../Utils/Routes'
import { Link, useNavigate, NavLink } from 'react-router-dom'
// import { Outlet, useNavigate } from 'react-router-dom'
import {
  AppstoreOutlined,
  CloseOutlined,
  EnvironmentOutlined,
  LogoutOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
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
      key: '0',
      label: (
        <Link to={`/profile/${role}`}>
          {/* <Link to={`/profile/${localStorage.access}`}></Link> */}
          <div className={s.iconLink}>
            <UserICON /> <span>Мой профиль</span>
          </div>
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to={`#`}>
          {/* <Link to={`/profile/${localStorage.access}`}></Link> */}
          <div className={s.iconLink}>
            <Basket /> <span>Корзина</span>
          </div>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={`#`}>
          {/* <Link to={`/profile/${localStorage.access}`}></Link> */}
          <div className={s.iconLink}>
            <StarICON /> <span>Шаблон сравнения </span>
          </div>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to={`#`}>
          {/* <Link to={`/profile/${localStorage.access}`}></Link> */}
          <div className={s.iconLink}>
            <VectICON /> <span>Избранное</span>
          </div>
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Button
          className={s.btnExit}
          type="text"
          onClick={() => {
            localStorage.clear()
            navigation('/')
          }}
        >
          <div className={s.iconLink}>
            <SignOutICON /> <span>Выйти</span>
          </div>
        </Button>
      ),
    },
  ]
  return (
    <header className={s.mainHeader}>
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
            Dropdown: {
              colorBgElevated: '#0B0B0C',
              colorText: '#fff',
            },
          },
        }}
      >
        <div className={s.divHead1}>
          <div className={s.chldDivH1}>
            {/* <span style={{ color: 'white', paddingRight: '40px' }}>LOGO</span> */}
            <Link to={ROUTES.MAIN}>
              <img src={LOGO} alt="Stuff" />
            </Link>
            <Link to={!katalogBTN ? 'catalog' : '/'}>
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
            </Link>

            <Search
              placeholder="Поиск"
              className={`${s.searchHead} searchHeadG`}
            />
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
                <Button
                  // className={s.btnExit}
                  type="text"
                  icon={<UserOutlined />}
                  style={{ color: 'white' }}
                >
                  {localStorage.userName ? localStorage.userName : 'Войти'}
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

            <NavLink to="contacts">
              <Button type="text" className={`${s.btnStyle}`}>
                Контакты
              </Button>
            </NavLink>
          </div>
        </div>
        <div className={s.divHead2}>
          <div className={s.grpBtnHed2}>
            <Link to="manufacturers">
              <Button
                type="text"
                icon={<FactoryIcon size={19} />}
                className={`${s.factoryBTN} ${s.btnStyle}`}
              >
                Производители
              </Button>
            </Link>
            <Link to="visitors">
              <Button
                type="text"
                icon={<UserAddOutlined />}
                className={`${s.btnStyle}`}
              >
                Посетители
              </Button>
            </Link>
            <Link to="requestProduction">
              <Button type="text" className={`${s.btnStyle}`}>
                Запрос на изготовление
              </Button>
            </Link>
            <Link to="repairRequests">
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
      </ConfigProvider>
    </header>
  )
}

export default Header
