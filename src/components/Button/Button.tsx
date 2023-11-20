import { MouseEventHandler, PropsWithChildren } from 'react'
import './Button.scss'

interface IButtonProps extends PropsWithChildren {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  type?: 'submit' | 'button' | 'reset' | undefined
}

const Button = ({
  children,
  disabled = false,
  onClick,
  type = undefined,
}: IButtonProps) => {
  const disabledClass = disabled ? 'btn--disabled' : ''
  const className = `btn${disabledClass}`

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
