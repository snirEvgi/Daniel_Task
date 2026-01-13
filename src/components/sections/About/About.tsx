import { motion } from 'framer-motion'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
import useCounter from '../../../hooks/useCounter'
import Button from '../../common/Button/Button'
import FloatingDots from '../../common/FloatingDots/FloatingDots'
import styles from './About.module.css'

const About = () => {
  const { ref, controls } = useScrollAnimation()
  const { ref: headerRef, controls: headerControls } = useScrollAnimation()
  const { count: yearsCount, ref: yearsRef } = useCounter({ end: 18, duration: 2000 })
  const { count: projectsCount, ref: projectsRef } = useCounter({ end: 300, duration: 2000 })
  const { count: clientsCount, ref: clientsRef } = useCounter({ end: 200, duration: 2000 })
  
  const headerText = 'כמה מילים מאלה שסיימו את התהליך'
  const letters = headerText.split('')

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }


  const testimonialImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/assets/testemonial${i + 1}.jpg`,
    alt: `Testimonial ${i + 1}`,
  }))

  return (
    <section className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.content}>
          <motion.div className={styles.textSection} variants={itemVariants} initial="hidden" animate={controls}>
            <h2 className={styles.name}>רועי שמואל</h2>
            <div className={styles.quoteBox}>
              <p className={styles.quote}>
                לכדי להגיע לתוצאה מושלמת, צריך לנהל תהליך נכון - וכאן, אני נכנס לתמונה
              </p>
            </div>
            <div className={styles.bio}>
              <p>
                למעלה מ-18 שנים שאני רואה את הלקוחות שלי נכנסים לבית החדש שלהם עם ניצוץ בעיניים ורוגע אמיתי והאמת, שזו המטרה שלי
              </p>
              <p>
                אני מכיר את התחושה הזו כשעומדים מול בית חדש ויש מיליון שאלות. איפה כל דבר עומד להיות, מאיפה מתחילים? והשאלה הכי גדולה - איך הכל יראה בסוף?
              </p>
              <p>
                והאמת, שזה יכול להראות ולהשמע מאוד מלחיץ - אבל הדבר שאני שם עליו תמיד דגש הוא זה שאתם תעברו את כל התהליך הזה ברוגע. התהליך איתי לא מסתכם רק באיך שהדברים נראים, הוא גם איך מרגישים בדרך לשם. לכן אני דואג שהכול יהיה ברור, שכל שלב יהיה מתוכנן, ושיהיה מי שידאג להכל - כדי שאתם לא תצטרכו לדאוג לרגע.
              </p>
              <p>
                המשפט שאני תמיד הולך איתו הוא ש״לא בונים או משפצים כל יום בית״ אז אם כבר התחלתם, תסיימו בצורה מושלמת
              </p>
            </div>
          </motion.div>

          <div className={styles.profileSection}>
            <div className={styles.imageWrapper}>
              <img
                src="/assets/person.jpg"
                alt="רועי שמואל"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem} ref={clientsRef}>
                <span className={styles.statNumber}>+{clientsCount}</span>
                <span className={styles.statLabel}>לקוחות מרוצים</span>
              </div>
              <div className={styles.statItem} ref={projectsRef}>
                <span className={styles.statNumber}>+{projectsCount}</span>
                <span className={styles.statLabel}>פרויקטים</span>
              </div>
              <div className={styles.statItem} ref={yearsRef}>
                <span className={styles.statNumber}>{yearsCount}</span>
                <span className={styles.statLabel}>שנות ניסיון</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsSection}>
          <FloatingDots />
          <h2 
            ref={headerRef}
            className={styles.testimonialsIntro}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={headerControls}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }
                }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h2>
          <div className={styles.testimonialsScrollContainer}>
            {testimonialImages.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialItem}>
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className={styles.testimonialImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.ctaWrapper}>
            <Button 
              variant="primary" 
              whatsappNumber="+972 54-521-5216"
              whatsappMessage="היי רועי הגעתי מהדף שלך, אשמח לשמוע עוד על.."
            >
              רועי, בוא נדבר!
            </Button>
          </div>
        </div>

     
      </div>
    </section>
  )
}

export default About
