import React, { SetStateAction, useState } from 'react'
import Button from '../Button/Button'
import './Slider.scss'
import { nanoid } from '@reduxjs/toolkit'

interface ISlider {
  prop: string
  setProp: React.Dispatch<SetStateAction<string>>
  items: string[]
}

const Slider = ({ items, setProp, prop }: ISlider) => {
  const onMenuClick = (menu: string) => {
    setProp(menu)
  }

  const classes = `slider ${items.length > 3 ? 'slider--wide' : ''}`

  const renderedMenu = items.map((el) => (
    <Button
      key={nanoid()}
      className={`slider__btn ${el === prop && 'slider__btn--active'}`}
      onClick={() => onMenuClick(el)}
    >
      {el}
    </Button>
  ))

  return <div className={classes}>{renderedMenu}</div>
}

export default Slider
