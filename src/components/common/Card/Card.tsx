import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'hover'
}

const Card = ({ children, className = '', onClick, variant = 'default' }: CardProps) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]} ${className}`}
      onClick={onClick}
      whileHover={variant === 'hover' ? { y: -5, boxShadow: 'var(--shadow-lg)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
