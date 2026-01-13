import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  whatsappNumber?: string
  whatsappMessage?: string
}

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  whatsappNumber,
  whatsappMessage
}: ButtonProps) => {
  const handleClick = () => {
    if (whatsappNumber && whatsappMessage) {
      // Format phone number: remove +, spaces, and dashes
      const formattedNumber = whatsappNumber.replace(/[\s\+\-]/g, '')
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <motion.button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </motion.button>
  )
}

export default Button
