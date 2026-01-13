import { motion } from 'framer-motion'
import styles from './ProjectDetail.module.css'

interface ProjectDetailProps {
  backgroundImage: string
  category: string
  title: string
  description: string
  area: string
  location: string
  year: string
  onViewGallery: () => void
}

const ProjectDetail = ({
  backgroundImage,
  category,
  title,
  description,
  area,
  location,
  year,
  onViewGallery,
}: ProjectDetailProps) => {
  return (
    <div className={styles.projectDetailView}>
      <div
        className={styles.detailBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <motion.div
        className={styles.detailOverlay}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.overlyaContent}>
          <span className={styles.overlayCategory}>{category}</span>
          <h2 className={styles.overlayTitle}>{title}</h2>
          <p className={styles.overlayDescription}>{description}</p>
          <div className={styles.overlaySpecs}>
            <div className={styles.overlaySpecItem}>
              <span className={styles.overlaySpecLabel}>שטח</span>
              <span className={styles.overlaySpecValue}>{area}</span>
            </div>
            <div className={styles.overlaySpecItem}>
              <span className={styles.overlaySpecLabel}>מיקום</span>
              <span className={styles.overlaySpecValue}>{location}</span>
            </div>
            <div className={styles.overlaySpecItem}>
              <span className={styles.overlaySpecLabel}>שנה</span>
              <span className={styles.overlaySpecValue}>{year}</span>
            </div>
          </div>
          <button className={styles.viewGalleryButton} onClick={onViewGallery}>
            צפה בגלריה המלאה
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetail
