import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../../common/Button/Button'
import styles from './Process.module.css'

interface Step {
  number: string
  side: 'left' | 'right'
  title: string
  description: string
}

const Process = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [stepVisibility, setStepVisibility] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps: Step[] = [
    {
      number: '1',
      side: 'left',
      title: 'מגלים מי אתם - ומה באמת חשוב לכם',
      description: 'עוד לפני שמדברים על עיצוב - אנחנו מבינים אתכם. את סדר היום שלכם, מה נעים לכם, מה חשוב לכם באמת, ואיך אתם אוהבים לחיות. זה הבסיס לבית שמתוכנן בדיוק בשבילכם - פרקטי, נעים, ומרגיש נכון מהשנייה שנכנסים.',
    },
    {
      number: '2',
      side: 'right',
      title: 'מתכננים הכול על הנייר - כדי שלא תהיו מופתעים אחר כך',
      description: 'תכנון מדויק מונע טעויות יקרות. אתם מקבלים סקיצות ברורות וחלוקות חכמות שמתחשבות במבנה, בזרימה ובשימושים היומיומיים. הכל מונח על השולחן - לפני שמתחילים, כדי שתדעו בדיוק לאן הולכים.',
    },
    {
      number: '3',
      side: 'left',
      title: 'רואים את החלום - עוד לפני שהוא קורה',
      description: 'לא צריך לדמיין. כבר עכשיו תראו את הבית שלכם - בדיוק כמו שהוא עומד להיראות. הדמיות ברמה גבוהה שכוללות כל פרט, כל גוון, כל חומר. אתם מרגישים בטוחים בבחירות - כי רואים הכל מראש, בלי הפתעות ובלי סימני שאלה.',
    },
    {
      number: '4',
      side: 'right',
      title: 'בוחרים חומרים - בראש שקט וביד בטוחה',
      description: 'כשהתמונה ברורה - הבחירות הופכות פשוטות. אתם יודעים מה מחמיא למה, מה משתלב, ומה ייראה נכון באמת. אני מצרף אתכם לספקים קבועים שלי - שמציעים איכות, מחיר הוגן ושירות אישי. התוצאה: חיסכון בכסף ובאנרגיות.',
    },
    {
      number: '5',
      side: 'left',
      title: 'העבודה יוצאת לדרך - ואתם לא לבד',
      description: 'מרגע שמתחילים, יש מי שמחזיק את כל החוטים. אני בקשר רציף עם הקבלן, הספקים, וכל מי שמעורב - ודואג שהכול יקרה בדיוק לפי התכנית. אתם פנויים להתמקד בהתרגשות - ולא בהתנהלות.',
    },
    {
      number: '6',
      side: 'right',
      title: 'מוסיפים את הטאץ\' - שהופך בית לבית',
      description: 'שלב ההלבשה הוא הרגע שבו הכול מתחבר. תאורה, טקסטיל, פריטים מדויקים - כל פרט מוסיף שכבה של אופי וחום. אתם מקבלים בית שנראה ומרגיש כמו מקום שבאמת שייך לכם.',
    },
    {
      number: '7',
      side: 'left',
      title: 'גם אחרי שהמפתח בידיים - אני כאן',
      description: 'הקשר לא מסתיים ברגע שנכנסתם. אני ממשיך ללוות גם אחרי - אם צריך משהו קטן, שינוי, חיבור נוסף. המטרה היא שתרגישו בטוחים גם בהמשך - עם שקט נפשי מלא.',
    },
  ]

  // Check if element is out of view (more than 5% above viewport)
  const isElementOutOfView = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect()
    const elementHeight = rect.height
    const threshold = elementHeight * 0.05 // 5% of element height
    return rect.top < -threshold
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return

      const section = sectionRef.current
      const timelineContainer = lineRef.current
      const sectionRect = section.getBoundingClientRect()
      const timelineRect = timelineContainer.getBoundingClientRect()
      
      const sectionTop = sectionRect.top
      const windowHeight = window.innerHeight
      
      // Calculate progress based on timeline container's actual position
      // Start tracking when section enters viewport (at 20% from top)
      const scrollStart = windowHeight * 0.2
      
      // Calculate when timeline container's bottom reaches the viewport
      // This is when scrollProgress should reach 1.0
      const timelineBottom = timelineRect.bottom
      
      // Scroll range: from when section enters to when timeline bottom is reached
      // The timeline bottom position relative to section start
      const timelineBottomFromSection = timelineBottom - sectionRect.top
      
      // Calculate scroll range: distance from scroll start to when timeline bottom is reached
      // Add some padding to ensure smooth completion
      const scrollRange = timelineBottomFromSection + (windowHeight * 0.1)
      
      // Calculate progress: 0 when section enters, 1 when timeline bottom is reached
      const progress = scrollRange > 0 
        ? Math.max(0, Math.min(1, (scrollStart - sectionTop) / scrollRange))
        : 0
      
      setScrollProgress(progress)

      // Check viewport visibility for each step
      const visibility: boolean[] = []
      stepRefs.current.forEach((stepRef) => {
        if (stepRef) {
          visibility.push(!isElementOutOfView(stepRef))
        } else {
          visibility.push(true) // Default to visible if ref not set
        }
      })
      setStepVisibility(visibility)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    // Also recalculate on resize to handle layout changes
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Calculate which step the line has reached
  // Start at 0.5 (first circle reached after 0.5 scroll)
  // Each step requires 2 moves (0.5 + 0.5 = 1 step)
  // Total range: 0.5 to (steps.length * 2) + 0.5
  const lineReachedStep = (scrollProgress * (steps.length * 2 ))+ 0.5
  
  // Calculate if line has reached circle's top edge based on actual visual position
  const hasLineReachedCircle = (index: number): boolean => {
    const circle = circleRefs.current[index]
    const timelineContainer = lineRef.current
    if (!circle || !timelineContainer) return false
    
    const circleRect = circle.getBoundingClientRect()
    const containerRect = timelineContainer.getBoundingClientRect()
    const circleTopRelative = circleRect.top - containerRect.top
    
    // Fill line height based on scroll progress
    const fillHeight = scrollProgress * timelineContainer.offsetHeight
    
    return fillHeight >= circleTopRelative
  }
  
  // Determine if step should be visible
  // With 0.5 step increments: step appears at index + 0.5, checkmark at index + 1.5, fade out at index + 2.0
  const shouldShowStep = (index: number): boolean => {
    // Step appears when line reaches its position (accounting for 0.5 start offset)
    const stepPosition = index + 0.5 // First step (index 0) appears at position 0.5
    const hasReached = lineReachedStep >= stepPosition
    if (!hasReached) return false
    
    // Fade out when line reaches 1.5 positions ahead (e.g., step 1 fades out when line reaches 2.0)
    // With 0.5 increments: step 0 fades at 2.0, step 1 fades at 3.0, etc.
    const shouldFadeOut = lineReachedStep >= stepPosition + 1.5
    const isOutOfView = stepVisibility[index] === false
    
    // Show if reached, but hide if line has reached 1.5 positions ahead AND out of view
    if (shouldFadeOut && isOutOfView) {
      return false
    }
    
    return true
  }

  // Get opacity for step elements (number and card)
  const getStepOpacity = (index: number): number => {
    const shouldShow = shouldShowStep(index)
    if (!shouldShow) return 0
    
    // Step position accounting for 0.5 start offset
    const stepPosition = index + 0.5
    
    // If just reached, fade in smoothly over 0.5 increments
    if (lineReachedStep >= stepPosition && lineReachedStep < stepPosition + 0.5) {
      const stepProgress = lineReachedStep - stepPosition
      return Math.max(0, Math.min(1, stepProgress * 2))
    }
    
    return 1
  }

  return (
    <section className={styles.process} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.intro}>אם הגעתם עד לכאן</p>
          <p className={styles.subtitle}>
            סימן שאתם רציניים לגבי השינוי החדש שלכם,
            <br />
            בדיוק בשביל זה יצרנו תהליך מסודר, רגוע ויעיל – כזה שיוביל אתכם בבטחה אל הבית המושלם.
          </p>
        </div>

        <div className={styles.processTitleSection}>
          <svg 
            className={styles.arrowDown}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
          <h2 className={styles.processTitle}>תהליך העבודה שלנו</h2>
        </div>

        <div className={styles.timelineContainer} ref={lineRef}>
          {/* Background line - full height, always visible */}
          <div className={styles.timelineBackground} />
          
          {/* Animated progress line that grows as you scroll */}
          {/* Calculate height based on scroll progress - continue filling beyond stage 7 */}
          {/* Use scrollProgress directly to ensure line fills to 100% as user scrolls to bottom */}
          <div 
            className={styles.timelineFill}
            style={{
              height: `${scrollProgress * 100}%`
            }}
          />

          {/* Steps - All positioned from top to bottom */}
          <div className={styles.stepsWrapper}>
            {steps.map((step, index) => {
              const shouldShow = shouldShowStep(index)
              const stepOpacity = getStepOpacity(index)
              // Step appears at index + 0.5, checkmark appears when line visually reaches the circle
              const stepPosition = index + 0.5
              const hasReached = lineReachedStep >= stepPosition
              
              // Show checkmark only when the fill line visually reaches the circle's top edge
              const showCheckmark = hasLineReachedCircle(index) && shouldShow
              
              // Determine circle state
              let circleState = styles.stepCircleInactive
              if (hasReached && shouldShow) {
                circleState = showCheckmark ? styles.stepCircleCompleted : styles.stepCircleActive
              }
              
              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className={styles.stepWrapper}
                >
                  {/* Number Circle / Check Mark */}
                  <div className={styles.stepCircleContainer}>
                    <div
                      ref={(el) => {
                        circleRefs.current[index] = el
                      }}
                      className={`${styles.stepCircle} ${circleState}`}
                      style={{
                        opacity: stepOpacity,
                        pointerEvents: stepOpacity === 0 ? 'none' : 'auto'
                      }}
                    >
                      {showCheckmark ? (
                        <svg 
                          className={styles.checkmark}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                  </div>

                  {/* Content Card with Slide Animation */}
                  <AnimatePresence mode="wait">
                    {shouldShow && (
                      <motion.div
                        key={`step-card-${index}`}
                        className={`${styles.stepBlock} ${step.side === 'left' ? styles.stepBlockLeft : styles.stepBlockRight}`}
                        initial={{ 
                          opacity: 0, 
                          x: step.side === 'left' ? -50 : 50,
                          scale: 0.95
                        }}
                        animate={{ 
                          opacity: stepOpacity, 
                          x: 0,
                          scale: 1
                        }}
                        exit={{ 
                          opacity: 0, 
                          x: step.side === 'left' ? -50 : 50,
                          scale: 0.95
                        }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.4, 0, 0.2, 1],
                          opacity: { duration: 0.4 }
                        }}
                        style={{
                          pointerEvents: stepOpacity === 0 ? 'none' : 'auto',
                          willChange: 'transform, opacity'
                        }}
                      >
                        <div className={styles.stepContent}>
                          <h3 className={styles.stepTitle}>{step.title}</h3>
                          <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Button 
            variant="primary" 
            whatsappNumber="+972 54-521-5216"
            whatsappMessage="היי רועי הגעתי מהדף שלך, אשמח לשמוע עוד על.."
          >
            רועי, בוא נדבר
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Process
