import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../../common/Button/Button'
import ContactForm from '../../common/ContactForm/ContactForm'
import styles from './Hero.module.css'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const images = [
    '/assets/photor1.jpg',
    '/assets/photor2.jpg',
    '/assets/photor3.jpg',
    '/assets/photor4.jpg',
    '/assets/photor5.jpg',
  ]

  // Auto-rotate images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [images.length])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const imageVariants = {
    initial: { scale: 1.1 },
    animate: {
      scale: 1,
      transition: {
        duration: 7,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth ease-in
      },
    },
    exit: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  }

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className={styles.imageWrapper}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Hero image ${currentImageIndex + 1}`}
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.contentOverlay}>
        <div className="container">
          <motion.div
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.textContent} variants={itemVariants}>
              <h1 className={styles.title}>Consillium</h1>
              <p className={styles.subtitle}>החלום שלכם הוא המומחיות שלנו</p>
              <p className={styles.description}>
                ליווי מא' עד ת' אל הבית שחלמתם עליו, בלי כאבים בראש ובכיס
              </p>
            </motion.div>

            <motion.div className={styles.actions} variants={itemVariants}>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className={styles.progressIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={styles.indicatorWrapper}
            onClick={() => setCurrentImageIndex(index)}
          >
            <div
              className={`${styles.indicator} ${
                index === currentImageIndex ? styles.active : ''
              }`}
            >
              {index === currentImageIndex && (
                <motion.div
                  key={currentImageIndex}
                  className={styles.progressBar}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 7, ease: 'linear' }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact button in bottom left */}
      <div className={styles.contactButtonWrapper}>
        <Button 
          variant="outline" 
          className={styles.heroButton}
          onClick={() => setIsContactFormOpen(true)}
        >
          צרו קשר
        </Button>
      </div>

      {/* Projects button in bottom right */}
      <div className={styles.projectsButtonWrapper}>
        <Button 
          variant="outline" 
          className={styles.heroButton}
          onClick={() => {
            const projectsSection = document.querySelector('#projects-section')
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        >
          פרוייקטים
        </Button>
      </div>

      {/* Scroll down arrow - centered */}
      <motion.div 
        className={styles.scrollDownArrow}
        onClick={() => {
          const introductionSection = document.querySelector('#introduction-section')
          if (introductionSection) {
            introductionSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  )
}

export default Hero
