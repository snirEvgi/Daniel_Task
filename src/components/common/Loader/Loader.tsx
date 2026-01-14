import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Loader.module.css'

const Loader = () => {
  const loadingText = 'LOADING...'
  const letters = loadingText.split('')
  const [showFullOpacity, setShowFullOpacity] = useState(false)

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  // Centered + glowing (no fake X movement)
  const voidVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => {
      const isD = index === 3
      return {
        opacity: isD && !showFullOpacity ? 0.4 : 1,
        y: 0,
        transition: {
          delay: 0.4 + index * 0.15,
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        },
      }
    },
  }

  useEffect(() => {
    const t = setTimeout(() => setShowFullOpacity(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className={styles.loader}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className={styles.backgroundPattern}
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Glow halo */}
        <motion.div
          className={styles.voidGlow}
          variants={voidVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Core void */}
        <motion.div
          className={styles.circularVoid}
          variants={voidVariants}
          initial="hidden"
          animate="visible"
        />

        <div className={styles.textContainer}>
          <div className={styles.loadingText}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className={styles.letter}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
