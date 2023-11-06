import React, { PropsWithChildren } from 'react'
import './ButtonLight.scss'

interface IButtonLightProps extends PropsWithChildren {
  disabled?: boolean
  onClick?: () => void
}

const ButtonLight = ({ children, onClick }: IButtonLightProps) => {
  const className = `btn-light`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLight
