import './Input.scss'

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
}

const Input = ({ ...props }: IInputProps) => {
  const renderedLabel = props.label && (
    <label className="input__label">{props.label}</label>
  )

  return (
    <div
      className={['input-container', props.className]
        .filter((el) => el !== undefined)
        .join(' ')}
    >
      {renderedLabel}
      <input {...props} className="input" type="text" />
    </div>
  )
}

export default Input

// interface ICoffee {
// 	name: string
// 	description: string
// 	size: Array<number>

// }
//

// redux-persist for favorites and cart
