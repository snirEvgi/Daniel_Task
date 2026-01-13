import { motion } from 'framer-motion'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
import styles from './Footer.module.css'

const Footer = () => {
  const { ref, controls } = useScrollAnimation()

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className={styles.footer} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <a href="/terms" className={styles.link}>
            תקנון ומדיניות פרטיות
          </a>
          <a
            href="https://danielrozenblat.co.il/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credit}
          >
            נבנה על ידי דניאל רוזנבלט
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
