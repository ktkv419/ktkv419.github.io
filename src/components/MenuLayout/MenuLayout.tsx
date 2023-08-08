import React from 'react'
import { IItem } from '../../utils/types'
import MenuItem from '../MenuItem/MenuItem'
import { nanoid } from '@reduxjs/toolkit'

interface IMenuLayout {
  items: Array<IItem> | undefined
}

const MenuLayout = ({ items }: IMenuLayout) => {
  const renderedItems = items?.map((item) => (
    <MenuItem key={nanoid()} {...item} />
  ))
  return <>{renderedItems}</>
}

export default MenuLayout
