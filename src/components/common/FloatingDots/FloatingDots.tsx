import { useEffect, useRef } from 'react'
import styles from './FloatingDots.module.css'

const FloatingDots = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const numberOfDots = 50

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createDot = () => {
      const dot = document.createElement('div')
      dot.className = styles.dot

      // Random horizontal position
      const x = Math.random() * 100

      // Random starting vertical position
      const startY = Math.random() * 100

      // Random size between 1px and 4px
      const size = Math.random() * 3 + 1

      // Random animation duration between 10s and 30s
      const duration = Math.random() * 20 + 10

      // Random delay to stagger the animations
      const delay = Math.random() * 10

      // Random opacity between 0.3 and 0.8
      const maxOpacity = Math.random() * 0.5 + 0.3

      dot.style.left = `${x}%`
      dot.style.bottom = `${startY}%`
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`
      dot.style.animationDuration = `${duration}s`
      dot.style.animationDelay = `${delay}s`
      dot.style.setProperty('--max-opacity', String(maxOpacity))

      container.appendChild(dot)
    }

    // Create all dots
    for (let i = 0; i < numberOfDots; i++) {
      createDot()
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.dotsContainer} />
}

export default FloatingDots
