import Button from '../../../../components/Button/Button'
import { ITutorialProps } from '../../Tutorial'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from '@reduxjs/toolkit'
import ProgressDots from '../../../../components/ProgressDots/ProgressDots'
import { useRef } from 'react'
import { tg } from '../../../..'

const Name = ({ setStage, stage }: ITutorialProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <AnimatePresence initial={false}>
      {stage === 'name' && (
        <motion.div
          key={nanoid()}
          initial={{ x: '100vw' }}
          animate={{ x: '0vw' }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="tutorial tutorial--name"
        >
          <div className="tutorial__content">
            <img src="/name.png" className="tutorial__img" alt="" />
            <ProgressDots allSteps={5} currStep={3} />
            <div className="tutorial__text">
              <h1 className="tutorial__title">Давайте знакомиться!</h1>
              <input
                ref={inputRef}
                type="text"
                value={tg.initData}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="tutorial__btn-container">
            <Button
              disabled={inputRef.current?.value.length === 0}
              onClick={() => {
                setStage('payment')
              }}
            >
              Продолжить
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Name
