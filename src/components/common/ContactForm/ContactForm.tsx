import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: '',
    extension: '',
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))
  }

  const handleSubmit = () => {
    // Validation
    if (!formData.fullName || !formData.phone || !formData.reason || !formData.termsAccepted) {
      return
    }
    // The WhatsApp link will be opened by the Button component
    // Close the form after a short delay to allow the WhatsApp link to open
    setTimeout(() => {
      onClose()
      setFormData({
        fullName: '',
        phone: '',
        reason: '',
        extension: '',
        termsAccepted: false,
      })
    }, 500)
  }

  const handleCancel = () => {
    setFormData({
      fullName: '',
      phone: '',
      reason: '',
      extension: '',
      termsAccepted: false,
    })
    onClose()
  }

  // Close on ESC key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onKeyDown={handleKeyDown}
          />
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onKeyDown={handleKeyDown}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <form className={styles.form} dir="rtl">
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>שם מלא</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="השם שלכם"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>מספר טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="reason" className={styles.label}>סיבת פנייה</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">בחרו סיבת פנייה</option>
                  <option value="consultation">ייעוץ ראשוני</option>
                  <option value="renovation">שיפוץ</option>
                  <option value="design">עיצוב פנים</option>
                  <option value="architecture">אדריכלות</option>
                  <option value="other">אחר</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="extension" className={styles.label}>הרחבה (אופציונלי)</label>
                <textarea
                  id="extension"
                  name="extension"
                  value={formData.extension}
                  onChange={handleChange}
                  placeholder="ספרו לנו יותר על הפרויקט שלכם..."
                  className={styles.textarea}
                  rows={4}
                />
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                  required
                />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  קראתי את תקנון ומדיניות פרטיות ואני מאשר/ת
                </label>
              </div>

              <div className={styles.buttonGroup}>
                <Button
                  type="button"
                  variant="primary"
                  className={styles.submitButton}
                  whatsappNumber="+972545215216"
                  whatsappMessage={`היי רועי, הגעתי מהדף שלך. שם: ${formData.fullName}, טלפון: ${formData.phone}, סיבת פנייה: ${formData.reason}${formData.extension ? `, הרחבה: ${formData.extension}` : ''}`}
                  onClick={handleSubmit}
                >
                  רועי, בוא נדבר
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className={styles.cancelButton}
                >
                  ביטול
                </Button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactForm
