import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
import Button from '../../common/Button/Button'
import styles from './WhyChooseUs.module.css'

interface BenefitItemProps {
  benefit: {
    iconSrc: string
    title: string
    description: string[]
  }
  index: number
  iconStyle: React.CSSProperties
  itemVariants: any
  textVariants: any
}

const BenefitItem = ({ benefit, index, iconStyle, itemVariants, textVariants }: BenefitItemProps) => {
  const [itemRef, itemInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={itemRef}
      variants={itemVariants}
      initial="hidden"
      animate={itemInView ? 'visible' : 'hidden'}
      className={`${styles.benefitItem} ${index % 2 === 0 ? styles.rightIcon : styles.leftIcon}`}
    >
      <div className={styles.iconWrapper}>
        <lord-icon
          src={benefit.iconSrc}
          trigger="loop"
          delay={2 * 1200}
          colors="primary:#ffffff,secondary:#ffffff"
          style={iconStyle}
          className={styles.icon}
        />
      </div>
      <motion.div 
        className={styles.contentWrapper}
        variants={textVariants}
      >
        <h3 className={styles.title}>{benefit.title}</h3>
        <div className={styles.description}>
          {benefit.description.map((text, i) => (
            <p key={i}>
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const { ref, controls } = useScrollAnimation()
  const { ref: questionRef, controls: questionControls } = useScrollAnimation()
  
  const questionText = '״אז רועי, למה בכלל לקחת אדריכל ומעצב פנים?״'
  const questionLetters = questionText.split('')

  const iconStyle = {
    width: '270px',
    height: '250px'
  }
  const benefits = [
    {
      iconSrc: 'https://cdn.lordicon.com/msoeawqm.json', // Money bag icon
      title: 'חסכון בטעויות יקרות',
      description: [
        'שקע שלא במקום? נישה שבולטת מהקיר? מזגן שאי אפשר לפתוח לידו את הארון? טעויות קטנות כאלה נשמעות שוליות - אבל כל אחת עולה אלפי שקלים, זמן (וגם עצבים)',
        'כשיש אדריכל ומעצב פנים שמבין את התמונה הגדולה, כל פרט יושב בדיוק איפה שהוא צריך. אתם לא מתקנים בדיעבד - אתם בונים נכון מההתחלה.',
      ],
    },
    {
      iconSrc: 'https://cdn.lordicon.com/wxnxiano.json', // Team/people icon
      title: 'לא תרגישו לבד לרגע',
      description: [
        'במקום לרדוף אחרי ספקים, להשוות מחירים ולתאם פגישות לבד - יש לכם אותי.',
        'יש לי צוות מקצועי ומנוסה שמלווה את הפרויקט ואני זה שמגיע לספקים, בודק, בוחר ומאשר כל דבר. אתם לא צריכים להתפזר או להתמודד עם כמה גורמים - אני כאן לנהל את הכול, בצורה שקטה ומסודרת, ולוודא שכל פרט מתקדם בדיוק כמו שצריך.',
      ],
    },
    {
      iconSrc: 'https://cdn.lordicon.com/ivhjpjsw.json', // Eye/vision icon
      title: 'אפס הפתעות - אתם רואים הכול מראש',
      description: [
        'הרבה אנשים יוצאים לדרך בלי לדעת באמת איך ייראה הבית. רק אחרי שכבר שילמו וביצעו - הם מגלים שזה לא בדיוק מה שדמיינו.',
        'אצלי זה לא קורה. אני בונה עבורכם הדמיה מדויקת (ברמה שלא תבדילו בין ההדמייה למציאות), שתראו בדיוק איך כל חלל ייראה. לפני שמזמינים. לפני שבונים. בלי הפתעות, בלי מקום לספק.',
      ],
    },
    {
      iconSrc: 'https://cdn.lordicon.com/etwtznjn.json', // Wallet/money icon
      title: 'שולטים בתקציב',
      description: [
        'שיפוץ או עיצוב בית יכולים בקלות לגלוש מהר מתקציב. מה שנראה כמו תוספת קטנה בהתחלה - הופך לאלפי ועשרות שקלים בלי לשים לב.',
        'אני בונה אתכם תוכנית ברורה מראש - כמה כל דבר עולה, על מה אפשר לוותר, ואיפה לא להתפשר. יש לנו טבלה מסודרת ואתם יודעים בדיוק לאן הולך כל שקל, בלי הפתעות.',
      ],
    },
    {
      iconSrc: 'https://cdn.lordicon.com/rhvddzym.json', // Shield/protection icon
      title: 'יש לכם גב',
      description: [
        'כל שאלה, כל התלבטות, כל אתגר - אתם לא לבד. אני איתכם לאורך כל הדרך, מהשלב שבו הכול עוד על הנייר - ועד הרגע שאתם מקבלים מפתח לבית גמור.',
        'גם אחרי המסירה - אני נשאר זמין לכם. כי כשיש לכם מישהו שדואג לכם, הכול מרגיש קל יותר.',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from right (positive x in RTL)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className={styles.whyChooseUs} ref={ref}>
         <div className={styles.questionSection}>
          <p 
            ref={questionRef}
            className={styles.question}
          >
            {questionLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={questionControls}
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
          </p>
        </div>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                benefit={benefit}
                index={index}
                iconStyle={iconStyle}
                itemVariants={itemVariants}
                textVariants={textVariants}
              />
            ))}
          </div>

          <motion.div className={styles.closing} variants={itemVariants}>
            <p>
              בסוף, זה לא רק בית - זו סביבה שתחיו בה כל יום. מגיע לכם שהיא תיראה בדיוק כמו שחלמתם, בלי להתפשר, בלי בלגן, ובלי לשלם ביוקר על טעויות.
            </p>
            <div className={styles.ctaWrapper}>
              <Button 
                variant="primary" 
                whatsappNumber="+972 54-521-5216"
                whatsappMessage="היי רועי הגעתי מהדף שלך, אשמח לשמוע עוד על.."
              >
                רועי, בוא נדבר
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
