import React from 'react'
import s from './OurPartners.module.css'

const OurPartners = () => {
  return (
    <div className={s.mainL2}>
      <div className={s.mch1}>
        <span className="fontSiz_32_500">Наши партнеры</span>
      </div>
      <div className={s.mch2}>
        <div className={` ${s.mch_2}`}>
          <img src={require('../../image/part1.png')} alt="" />
        </div>
        <div className={`${s.mch_2}`}>
          <img src={require('../../image/part2.png')} alt="" />
          <span className={s.fntSz16}>Группа компаний Инструмент</span>
        </div>
        <div className={`${s.mch_2}`}>
          <img src={require('../../image/part1.png')} alt="" />
        </div>
        <div className={`${s.mch_2}`}>
          <img src={require('../../image/part2.png')} alt="" />
          <span className={s.fntSz16}>Группа компаний Инструмент</span>
        </div>
        <div className={`${s.mch_2}`}>
          <img src={require('../../image/part1.png')} alt="" />
        </div>
        <div className={`${s.mch_2}`}>
          <img src={require('../../image/part2.png')} alt="" />
          <span className={s.fntSz16}>Группа компаний Инструмент</span>
        </div>
      </div>
    </div>
  )
}

export default OurPartners
