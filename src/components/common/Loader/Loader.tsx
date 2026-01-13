import { motion } from 'framer-motion'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Consillium</h1>
      </motion.div>
      <motion.div
        className={styles.spinner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.spinnerCircle}></div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
