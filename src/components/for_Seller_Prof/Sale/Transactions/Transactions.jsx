import React, { useState } from 'react'
import s from './Transactions.module.css'

import { useSelector } from 'react-redux'

import { Button, Input, Radio } from 'antd'

import Kanban from './Kanban/Kanban'
import List from './List/List'
import Archive from './Archiv/Archive'
const Transactions = () => {
  const { Search } = Input
  const { cardTransaction } = useSelector(
    ({ newTransaction }) => newTransaction
  )
  const [choiceList, setChoosing] = useState('Kanban')
  console.log(cardTransaction)
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Сделки</span>
        <Radio.Group
          className="radioGrpBtn"
          defaultValue="Kanban"
          buttonStyle="solid"
          onChange={(e) => setChoosing(e.target.value)}
        >
          <Radio.Button className="radBtn" value="Kanban">
            Канбан
          </Radio.Button>
          <Radio.Button className="radBtn" value="List">
            Список
          </Radio.Button>
          <Radio.Button className="radBtn" value="Archive">
            Архив
          </Radio.Button>
        </Radio.Group>
        <Search
          placeholder="Поиск"
          className={`${s.searchHead} searchHeadG`}
          //   prefix={<UserOutlined />}
        />
      </div>
      <div className={s.boxFlexTitl}>
        {choiceList === 'Kanban' && (
          <Kanban cardTransaction={cardTransaction} />
        )}
        {choiceList === 'List' && <List />}
        {choiceList === 'Archive' && <Archive />}
      </div>
    </div>
  )
}

export default Transactions
