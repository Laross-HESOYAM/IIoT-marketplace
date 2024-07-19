import React from 'react'
import s from './RequestProduction.module.css'

import { Button } from 'antd'

import Request_NotAuthorized from '../../components/for_RequestProduction/Request_NotAuthorized/Request_NotAuthorized'
import Request_authorized from '../../components/for_RequestProduction/Request_authorized/Request_authorized'
const RequestProduction = ({ toglClass, setToglClass }) => {
  console.log(localStorage.access)
  return (
    <div className="mainDiv">
      <div className={s.mainChaild}>
        {!localStorage.access ? (
          <Request_NotAuthorized
            toglClass={toglClass}
            setToglClass={setToglClass}
          />
        ) : (
          <Request_authorized />
        )}
        {/* <Request_NotAuthorized /> */}
      </div>
    </div>
  )
}

export default RequestProduction
