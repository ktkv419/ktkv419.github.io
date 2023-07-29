import React from 'react'
import './ProgressDots.scss'
import { nanoid } from '@reduxjs/toolkit'

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

const ProgressDots = ({ allSteps, currStep }: IProgressDotsProps) => {
  const steps = [...Array(allSteps)].map((el, i) => (
    <Dot key={nanoid()} active={i === currStep} />
  ))

  return <div className="progress-dots">{steps}</div>
}

export default ProgressDots
