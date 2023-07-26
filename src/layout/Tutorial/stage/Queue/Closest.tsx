import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Button from '../../../../components/Button/Button'
import { nanoid } from '@reduxjs/toolkit'
import { ITutorialProps } from '../../Tutorial'
import ProgressDots from '../../../../components/ProgressDots/ProgressDots'

const Closest = ({ setStage, stage }: ITutorialProps) => {
  return (
    <AnimatePresence>
      {stage === 'closest' && (
        <motion.div
          key={nanoid()}
          initial={{ x: '100vw' }}
          animate={{ x: '0vw' }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="tutorial tutorial--closest"
        >
          <div className="tutorial__content">
            <img src="/closest.png" className="tutorial__img" alt="" />
            <ProgressDots allSteps={5} currStep={2} />
            <div className="tutorial__text">
              <h1 className="tutorial__title">Найдите ближайшую кофейню!</h1>
              <p className="tutorial__desc">
                Откройте приложение и выберите ближайшую кофейню, чтобы заказать
                любимый напиток.
              </p>
            </div>
          </div>
          <div className="tutorial__btn-container">
            <Button
              onClick={() => {
                setStage('readiness')
              }}
            >
              Продолжить
            </Button>
            <Button
              type="light"
              onClick={() => {
                setStage('name')
              }}
            >
              Пропустить
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Closest
