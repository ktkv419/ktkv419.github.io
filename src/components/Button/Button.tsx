import React, { PropsWithChildren } from 'react'
import './Button.scss'

interface IButtonProps extends PropsWithChildren {
  disabled?: boolean
  type?: 'primary' | 'light'
  onClick?: () => void
}

const Button = ({
  children,
  disabled = false,
  type = 'primary',
  onClick,
}: IButtonProps) => {
  const disabledClass = disabled ? 'btn--disabled' : ''
  const typeClass = type === 'primary' ? 'btn--primary' : 'btn--light'
  const className = `btn ${[disabledClass, typeClass]
    .filter((el) => el !== '')
    .join(' ')}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
