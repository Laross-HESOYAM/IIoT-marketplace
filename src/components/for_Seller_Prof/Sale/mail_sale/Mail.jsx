import React, { useState } from 'react'
import s from './Miail.module.css'

import { Button, Input, Radio, Table } from 'antd'
const Mail = () => {
  const { Search } = Input
  const [choiceMail, setChoiceMail] = useState('Incoming')
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Тема',
      dataIndex: 'topic',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
      render: (text) => (
        <div>
          <span>Тема письма</span>
          <p>Недавно Вы......</p>
        </div>
      ),
    },
    {
      title: 'Вложения',
      dataIndex: 'Attachments',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: 'Дата',
      dataIndex: 'data',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ]
  const data = [
    {
      key: '1',
      name: 'EXPOLAND',
      topic: 98,
      Attachments: 60,
      data: 70,
    },
  ]
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Сделки</span>
        <div className={s.flGrpSerBtn}>
          <Radio.Group
            className="radioGrpBtn"
            defaultValue="Incoming"
            buttonStyle="solid"
            onChange={(e) => setChoiceMail(e.target.value)}
          >
            <Radio.Button className="radBtn" value="Incoming">
              Входящие
            </Radio.Button>
            <Radio.Button className="radBtn" value="WithAttachment">
              С вложением
            </Radio.Button>
            <Radio.Button className="radBtn" value="Outgoing">
              Исходящие
            </Radio.Button>
            <Radio.Button className="radBtn" value="Favourites">
              Избранное
            </Radio.Button>
          </Radio.Group>
          <div>
            <Search
              placeholder="Поиск"
              className={`${s.searchHead} searchHeadG`}
              //   prefix={<UserOutlined />}
            />
            <Button className={`${s.btnCreatMess}`}>Создать сообщение</Button>
          </div>
        </div>
      </div>
      <div className={s.boxTableMail}>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  )
}

export default Mail
