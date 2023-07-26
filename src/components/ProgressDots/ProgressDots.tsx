import React from 'react'
import './ProgressDots.scss'

interface IDotProps {
  active: boolean
}

interface IProgressDotsProps {
  allSteps: number
  currStep: number
}

const Dot = ({ active }: IDotProps) => {
  return (
    <div
      className={`progress-dot ${active ? 'progress-dot--active' : ''}`}
    ></div>
  )
}

const ProgressDots = ({
  allSteps,
  currStep: _currStep,
}: IProgressDotsProps) => {
  const currStep = _currStep - 1
  const steps = [...Array(allSteps)].map((el, i) => (
    <Dot active={i === currStep} />
  ))

  return <div className="progress-dots">{steps}</div>
}

export default ProgressDots
