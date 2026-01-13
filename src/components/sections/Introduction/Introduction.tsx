import { motion } from 'framer-motion'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
import styles from './Introduction.module.css'

const iconStyle = {
  width: '70px',
  height: '180px'
}
// Lordicon Icons
// Person nodding (Left card - RTL)
const NoddingPersonIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/shcfcebj.json"
    trigger="loop"
    delay="1000"
    colors="primary:#121331,secondary:#000000"
    style={iconStyle}
  />
)

// House with spin (Middle card)
const HouseIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/jeuxydnh.json"
    trigger="loop"
    delay="500"
    colors="primary:#121331,secondary:#000000"
    style={iconStyle}
  />
)

// Blueprint (Right card - RTL)
const BlueprintIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/hmpomorl.json"
    trigger="loop"
    delay="0"
    colors="primary:#121331,secondary:#000000"
    style={iconStyle}
  />
)

const Introduction = () => {
  const { ref, controls } = useScrollAnimation()

  const problems = [
    {
      icon: <BlueprintIcon />,
      text: 'הקבלן רוצה להתקדם מהר ומבקש תשובות אבל אתם עדין לא סגורים על כל הפרטים',
    },
    {
      icon: <HouseIcon />,
      text: 'ראיתם המון דוגמאות וסגנונות ואתם לא באמת יודעים מה יתאים לדירה שלכם ואיך להוציא אותם לפועל',
    },
    {
      icon: <NoddingPersonIcon />,
      text: 'אתם קופצים בין חנויות, מדברים עם ספקים, שומעים דעות שונות ובכל פעם הכל נהיה רק יותר ויותר מבלבל',
    },
  ]

  const problemsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const problemCardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      },
    },
  }

  return (
    <section id="introduction-section" className={styles.introduction}>
      <div className="container">
        <div>
          <div className={styles.header}>
            <h2 className={styles.title}>אם הגעתם לכאן</h2>
            <p className={styles.subtitle}>
              סימן שכבר קניתם דירה מקבלן או שאתם עומדים לשפץ את הבית שלכם
            </p>
            <p className={styles.greeting}>אז קודם כל מזל טוב!</p>
          </div>

          <div className={styles.content}>
            <p>
              זו אחת ההחלטות הכי מרגשות שאפשר לקבל. התחלה חדשה, חלל חדש, הזדמנות לעצב את הסביבה שתלווה אתכם כל יום מחדש.
            </p>
            <p>
              המון מחשבות מרגשות בדרך והמון תכנונים שאתם רק מחכים להוציא לפועל
            </p>
          </div>

          <div className={styles.problemHeader}>
            <h2 className={styles.problemIntro}>
              אבל אז.. מתחילים להבין כמה החלטות לא פשוטות מחכות בדרך
            </h2>
          </div>

          <motion.div 
            ref={ref}
            className={styles.problems} 
            variants={problemsContainerVariants}
            initial="hidden"
            animate={controls}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className={styles.problemCard}
                variants={problemCardVariants}
              >
                <div className={styles.problemContentLogoWrapper}>
                  <div className={styles.iconWrapper}>{problem.icon}</div>
                </div>
                  <p className={styles.problemText}>{problem.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.closing}>
            <h3 className={styles.closingTitle}>ובנקודה הזו</h3>
            <p>
              רוב הזוגות מבינים שהם לא רוצים ולא יכולים לעשות את השינוי הזה לבד כי כל טעות בתהליך עולה.. (וביוקר)
            </p>
            <h2 className={styles.finalStatement}>
              ובדיוק כאן אני נכנס לתמונה
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
