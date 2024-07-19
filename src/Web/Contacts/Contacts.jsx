import React, { useState } from 'react'
import s from './Contacts.module.css'

import { Input, Select } from 'antd'

const Contacts = () => {
  const { Search } = Input
  const [cardArr, setCardArr] = useState([...Array(6)].fill(1))
  console.log(cardArr)
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  return (
    <div className="mainDiv">
      <div className={s.mainChaild}>
        <span className="fontSiz_24_500">Контакты</span>
      </div>
    </div>
  )
}

export default Contacts
