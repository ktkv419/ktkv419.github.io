import Button from '../../../../components/Button/Button'
import { ITutorialProps } from '../../Tutorial'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from '@reduxjs/toolkit'
import ProgressDots from '../../../../components/ProgressDots/ProgressDots'

const Readiness = ({ setStage, stage }: ITutorialProps) => {
  return (
    <AnimatePresence>
      {stage === 'readiness' && (
        <motion.div
          key={nanoid()}
          initial={{ x: '100vw' }}
          animate={{ x: '0vw' }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="tutorial tutorial--readiness"
        >
          <div className="tutorial__content">
            <img src="/payment.png" className="tutorial__img" alt="" />
            <ProgressDots allSteps={5} currStep={3} />
            <div className="tutorial__text">
              <h1 className="tutorial__title">Отслеживайте готовность!</h1>
              <p className="tutorial__desc">
                После оформления заказа Вы можете следить за статусом готовности
                Вашего кофе, напитка или вкусного десерта!
              </p>
            </div>
          </div>
          <div className="tutorial__btn-container">
            <Button
              onClick={() => {
                setStage('payment')
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

export default Readiness
