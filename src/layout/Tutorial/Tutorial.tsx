import React, { SetStateAction, useEffect, useState } from 'react'
import Queue from './stage/Queue/Queue'
import Closest from './stage/Queue/Closest'
import { AnimatePresence, motion } from 'framer-motion'
import './Tutorial.scss'
import { Route, Routes } from 'react-router-dom'
import { tg } from '../..'
import Readiness from './stage/Queue/Readiness'
import Payment from './stage/Queue/Payment'
import Name from './stage/Queue/Name'

type TStages = 'queue' | 'closest' | 'readiness' | 'payment' | 'name'

export interface ITutorialProps {
  stage: TStages
  setStage: React.Dispatch<SetStateAction<TStages>>
}

const Tutorial = () => {
  const [stage, setStage] = useState<TStages>('queue')
  return (
    <section className="tutorial-container">
      <AnimatePresence>
        <Queue stage={stage} setStage={setStage} />
        <Closest stage={stage} setStage={setStage} />
        <Readiness stage={stage} setStage={setStage} />
        <Payment stage={stage} setStage={setStage} />
        <Name stage={stage} setStage={setStage} />
      </AnimatePresence>
    </section>
  )
}

export default Tutorial
