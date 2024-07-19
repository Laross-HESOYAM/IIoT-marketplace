import React from 'react'
import s from './RepairRequests.module.css'
import Repair_authorized from '../../../components/for_RepairRequests/Repair_authorized/Repair_authorized'
import Repair_NotAuthorized from '../../../components/for_RepairRequests/Repair_NotAuthorized/Repair_NotAuthorized'
const RepairRequests = ({ toglClass, setToglClass }) => {
  return (
    <div className="mainDiv">
      <div className={s.mainChaild}>
        {!localStorage.access ? (
          <Repair_NotAuthorized
            toglClass={toglClass}
            setToglClass={setToglClass}
          />
        ) : (
          <Repair_authorized />
        )}
      </div>
    </div>
  )
}

export default RepairRequests
