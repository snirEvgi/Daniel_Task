import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
import Button from '../../common/Button/Button'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const { ref, controls } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'איך אני יכול לדעת שתהיה התאמה בינינו מבחינת הטעם?',
      answer: 'זו באמת אחת השאלות שהכי חשוב לשאול. עיצוב זה לא \'מה יפה בעיניי\' , אלא מה מרגיש נכון לכם. אני לומד אתכם קודם - את הסגנון שלכם, את המטרות שלכם, את איך שאתם אוהבים לחיות ומה שחשוב לכם. אנחנו מדברים, עוברים על השראות, בונים יחד כיוון. ובשביל השקט שלכם - הכל מגובה בהדמיה מדויקת, כדי שתוכלו ממש לראות איך זה הולך להיראות לפני שמתחילים.',
    },
    {
      question: 'כבר עבדנו עם אדריכל ומעצב בעבר והחוויה לא הייתה טובה... איך נדע שזה לא יקרה שוב?',
      answer: 'לצערי אני שומע את זה לא מעט. זה מבאס, ואני מבין את החשש. ואני אשמח לשמוע מכם יותר על החווויה הלא נעימה שעברתם, אחרי למעלה מ-200 בתים שעיצבתי וליוויתי אני תמיד שם דגש על שקיפות אתכם לאורך כל התהליך ועל דרך עבודה מאוד ברורה: תכניות מדויקות, כתב כמויות, תקציב מסודר, הדמיות.. אין כאן אלתורים. המטרה שלי היא שתהיו רגועים ומרוצים לאורך כל הדרך בידיעה שהבית שלכם בידים טובות, לא שתחזרו על חוויה לא נעימה.',
    },
    {
      question: 'מה באמת החיסכון פה? זה נשמע כמו עוד הוצאה...',
      answer: 'זו שאלה לגמרי לגיטימית. אבל ברוב המקרים, דווקא כשחושבים שחוסכים - משלמים ביוקר. אני רואה את זה שוב ושוב: טעויות קטנות בתכנון, ספקים פחות מדויקים, בלת"מים או שינויים של הרגע האחרון - כל אחת מהן יכולה לעלות אלפי שקלים ובמצטבר להגיע לעשרות אלפי שקלים! כשיש מי שמכוון את כל התהליך - זה פשוט לא קורה. ליווי טוב הוא לא הוצאה - הוא ביטוח, גם לכסף וגם לשפיות שלכם.',
    },
    {
      question: 'האם אתה עובד רק עם הספקים שלך?',
      answer: 'אני עובד עם ספקים שאני מכיר - כאלה שראיתי איך הם עובדים ושטווח המחירים שלהם הכי משתלם עבורכם. זה נותן לי ביטחון ולכם חוסך הפתעות. אבל אם יש לכם ספק שאתם רוצים לעבוד איתו - כמובן שנשב, נבחן ונראה אם זה מתאים. הכי חשוב לי שתרגישו טוב עם מי שמלווה אתכם בדרך.',
    },
    {
      question: 'מה קורה אם הקבלן לוחץ עליי לסגור תכניות ואין לי זמן?',
      answer: 'זה קורה כמעט תמיד. קיבלתם תכניות - והשעון מתחיל לתקתק. הלחץ שם, ואני מכיר את זה מקרוב. בדיוק בשביל זה אני נכנס לתמונה: אני יודע איך להתנהל עם הקבלנים בצורה נכונה גם כשאין הרבה זמן. עובדים לפי שלבים ברורים, בלי בלאגן. אתם לא לבד במירוץ הזה - אני שם אתכם בכל צעד, כדי שלא תרגישו שאתם רצים לבד.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.faq} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <p className={styles.intro}>ורגע לפני שנדבר..</p>
          <p className={styles.subtitle}>
            ריכזתי עבורכם את כל השאלות שאולי צצו לכם במהלך הבירורים ואני בטוח שמעניינות אתכם. (לחצו על כל שאלה כדי לפתוח את התשובה)
          </p>
        </motion.div>

        <motion.div
          className={styles.faqList}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              variants={itemVariants}
            >
              <button
                className={`${styles.question} ${openIndex === index ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
                <span>{faq.question}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaWrapper}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Button 
            variant="primary" 
            whatsappNumber="+972 54-521-5216"
            whatsappMessage="היי רועי הגעתי מהדף שלך, אשמח לשמוע עוד על.."
          >
            רועי, יש לי עוד שאלה
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
