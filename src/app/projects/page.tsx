'use client'

import { projects } from '@/contents/projects'
import  ProjectCard  from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/animations'

export default function Projects() {
  return (
    <div className="container max-w-7xl mx-auto py-12 relative z-10">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  )
} 
