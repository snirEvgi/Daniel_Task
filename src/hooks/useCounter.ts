import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseCounterOptions {
  duration?: number
  start?: number
  end: number
  threshold?: number
}

export const useCounter = ({ duration = 2000, start = 0, end, threshold = 0.5 }: UseCounterOptions) => {
  const [count, setCount] = useState(start)
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!inView) return

    const startTime = Date.now()
    const difference = end - start

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + difference * easeOutQuart)
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    updateCount()
  }, [inView, start, end, duration])

  return { count, ref }
}

export default useCounter
