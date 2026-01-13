import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectDetail from './ProjectDetail'
import ProjectGallery from './ProjectGallery'
import styles from './Projects.module.css'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  area: string
  location: string
  year: string
  gallery: string[]
  hasDetail?: boolean
  detailBackground?: string
}

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Animation variants for data blocks - alternating drop directions
  const getDataBlockVariants = (index: number) => {
    const direction = index % 3 // 0: top, 1: middle, 2: bottom
    let initialY = 0
    
    if (direction === 0) {
      initialY = -50 // Drop from top
    } else if (direction === 1) {
      initialY = 0 // Drop from middle (center)
    } else {
      initialY = 50 // Drop from bottom
    }
    
    return {
      hidden: { opacity: 0, y: initialY },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }
  }

  return (
    <div
      className={styles.projectCard}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: project.hasDetail ? 'pointer' : 'default' }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
        <div className={styles.overlay}>
          <motion.div 
            className={styles.projectInfo}
            variants={getDataBlockVariants(index)}
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <span className={styles.category}>{project.category}</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const earthFusionRef = useRef<HTMLDivElement>(null)
  const [openGallery, setOpenGallery] = useState<{ projectId: number; images: string[] } | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Earth Fusion',
      category: 'אדריכלות',
      image: '/assets/earth-fusion-1.jpg',
      description: 'פרויקט חדשני המשלב אדריכלות ברת קיימא עם טכנולוגיות מתקדמות, יוצר מבנה אקולוגי המתמזג עם הסביבה הטבעית.',
      area: '500 מ״ר',
      location: 'רשפון',
      year: '2025',
      gallery: [
        '/assets/earth-fusion-1.jpg',
        '/assets/projects/earth-fusion-2.jpg',
        '/assets/projects/earth-fusion-3.png',
        '/assets/projects/earth-fusion-4.png',
        '/assets/projects/earth-fusion-5.png',
        '/assets/projects/earth-fusion-6.png',
        '/assets/projects/earth-fusion-7.png',
        '/assets/projects/earth-fusion-8.png',
        '/assets/projects/earth-fusion-9.png',
        '/assets/projects/earth-fusion-10.png',
      ],
      hasDetail: true,
      detailBackground: '/assets/projects/earth-fusion-2.jpg',
    },
    {
      id: 2,
      title: '16th floor sea view',
      category: 'עיצוב פנים',
      image: '/assets/16th-floor-1.jpg',
      description: 'שילוב מושלם של אלגנטיות עירונית ונוחות ביתית, עם דגש על ניצול מרבי של החלל והכנסת אור טבעי ונוף ים עוצר נשימה.',
      area: '120 מ״ר',
      location: 'בת ים',
      year: '2023',
      gallery: [`/assets/16th-floor-1.jpg`, 
        `/assets/projects/16th-floor-2.png`,
         `/assets/projects/16th-floor-3.png`,
          `/assets/projects/16th-floor-4.png`,
           `/assets/projects/16th-floor-5.png`,
            `/assets/projects/16th-floor-6.png`,
             `/assets/projects/16th-floor-7.png`,
              `/assets/projects/16th-floor-8.png`,
               `/assets/projects/16th-floor-9.png`,
                `/assets/projects/16th-floor-10.png`,
                `/assets/projects/16th-floor-11.png`,
                `/assets/projects/16th-floor-12.png`,
                `/assets/projects/16th-floor-13.png`,
                `/assets/projects/16th-floor-14.png`,
              ],
      hasDetail: true,
      detailBackground: '/assets/projects/16th-floor-2.png',
    },
    {
      id: 3,
      title: 'The penthouse',
      category: 'עיצוב פנים',
      image: '/assets/penthouse-1.jpg',
      description: 'נטהאוז יוקרתי עם נוף פנורמי וחלל מעוצב ברמה הגבוהה ביותר, המשלב יוקרה עם פרקטיות בכל פרט ועיצוב מתקדם ברמה בינלאומית.',
      area: '220 מ״ר',
      location: 'רעננה',
      year: '2024',
      gallery: [
        `/assets/penthouse-1.jpg`,
        `/assets/projects/penthouse-2.png`,
        `/assets/projects/penthouse-3.png`,
        `/assets/projects/penthouse-4.png`,
        `/assets/projects/penthouse-5.png`,
        `/assets/projects/penthouse-6.png`,
        `/assets/projects/penthouse-7.png`,
        `/assets/projects/penthouse-8.png`,
        `/assets/projects/penthouse-9.png`,
        `/assets/projects/penthouse-10.png`,
        `/assets/projects/penthouse-11.png`,
        `/assets/projects/penthouse-12.png`,
        `/assets/projects/penthouse-13.png`,
        `/assets/projects/penthouse-14.png`,
        `/assets/projects/penthouse-15.png`,
        `/assets/projects/penthouse-16.png`,
        `/assets/projects/penthouse-17.png`,
        `/assets/projects/penthouse-18.png`,
        `/assets/projects/penthouse-19.png`,
        `/assets/projects/penthouse-20.png`
 ],
      hasDetail: true,
      detailBackground: '/assets/projects/penthouse-4.png',
    },
    {
      id: 4,
      title: 'Soft Geometry',
      category: 'אדריכלות',
      image: '/assets/soft-geometry-1.jpg',
      description: 'עיצוב חם ומזמין המבוסס על פונקציונליות, עם שימוש בעץ טבעי וצבעים רכים היוצרים אווירה רגועה.',
      area: '200 מ״ר',
      location: 'רמת השרון',
      year: '2025',
      gallery: [
        `/assets/soft-geometry-1.jpg`,
        `/assets/projects/geometry-2.png`,
        `/assets/projects/geometry-3.png`,
        `/assets/projects/geometry-4.png`,
        `/assets/projects/geometry-5.png`,
      ],
      hasDetail: true,
      detailBackground: '/assets/projects/geometry-3.png',
    },
    {
      id: 5,
      title: 'Earthy Embrace',
      category: 'עיצוב פנים',
      image: '/assets/earthy-embrace-1.jpg',
      description: 'עיצוב אדמתי וחם המשלב חומרים טבעיים ויוצר אווירה רגועה ומזמינה עם דגש על קיימות וחיבור לטבע.',
      area: '180 מ״ר',
      location: 'חולון',
      year: '2023',
      gallery: [
        `/assets/earthy-embrace-1.jpg`,
        `/assets/projects/earthy-embrace-2.png`,
        `/assets/projects/earthy-embrace-3.png`,
        `/assets/projects/earthy-embrace-4.png`,
        `/assets/projects/earthy-embrace-5.png`,
        `/assets/projects/earthy-embrace-6.png`,
      ],
      hasDetail: true,
      detailBackground: '/assets/projects/earthy-embrace-3.png',
    },
    {
      id: 6,
      title: 'Earth Haven',
      category: 'אדריכלות',
      image: '/assets/earth-haven-1.jpg',
      description: 'מקלט טבעי המשלב אדריכלות ירוקה עם נוחות מודרנית, יוצר בית שמתאחד עם הסביבה הטבעית ומקדם אורח חיים בר קיימא.',
      area: '320 מ״ר',
      location: 'הוד השרון',
      year: '2025',
      gallery: [
        `/assets/earth-haven-1.jpg`,
        `/assets/projects/earth-haven-2.png`,
        `/assets/projects/earth-haven-3.png`,
        `/assets/projects/earth-haven-4.png`,
        `/assets/projects/earth-haven-5.png`,
        `/assets/projects/earth-haven-6.png`,
      ],
      hasDetail: true,
      detailBackground: '/assets/projects/earth-haven-2.png',
    },
  ]

  return (
    <section id="projects-section" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>מקבץ קטן מהפרוייקטים שלי</h2>
          <p className={styles.subtitle}>לחצו על כל תמונה כדי להגיע לפרוייקט</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => {
                const projectWithDetail = projects.find(p => p.id === project.id && p.hasDetail)
                if (projectWithDetail && earthFusionRef.current) {
                  earthFusionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            />
          ))}
        </div>
      </div>

      {projects
        .filter(project => project.hasDetail)
        .map((project) => (
          <div key={project.id} ref={project.id === 1 ? earthFusionRef : null}>
            <ProjectDetail
              backgroundImage={project.detailBackground || ''}
              category={project.category}
              title={project.title}
              description={project.description}
              area={project.area}
              location={project.location}
              year={project.year}
              onViewGallery={() => setOpenGallery({ projectId: project.id, images: project.gallery })}
            />
          </div>
        ))}

      {/* Gallery Modal */}
      {openGallery && (
        <ProjectGallery
          images={openGallery.images}
          projectTitle={projects.find(p => p.id === openGallery.projectId)?.title || ''}
          isOpen={true}
          onClose={() => setOpenGallery(null)}
        />
      )}
    </section>
  )
}

export default Projects
