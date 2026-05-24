import AnimatedSection from './AnimatedSection'
import ProjectCard from './ProjectCard'
import CardSwap, { Card } from './CardSwap'
import ProjectModal from './ProjectModal'
import { useState } from 'react'
import './Projects.css'

import adisonImg from '../assets/image.png'
import smartHomeImg from '../assets/image copy.png'
import pharmaImg from '../assets/image copy 2.png'
import salonImg from '../assets/image copy 3.png'

const projects = [
  {
    name: 'Salon System',
    icon: 'SS',
    image: salonImg,
    desc: 'A luxury salon management web dashboard built in React, focused on streamlining bookings, services, and premium business operations.',
    category: 'React Web',
    focus: 'Dashboard · React',
    year: '2024',
    accent: '#F472B6',
    bg: 'linear-gradient(135deg, #18030e 0%, #250516 50%, #18030e 100%)',
    tags: ['React', 'Management'],
    featured: true,
  },
  {
    name: 'Pharma System',
    icon: 'RX',
    image: pharmaImg,
    link: 'https://demo-fawn-omega-19.vercel.app/',
    desc: 'A React and Zustand-based web management system architected for pharmacy stock tracking, POS sales, and daily operations.',
    category: 'React Web',
    focus: 'Dashboard · React · Zustand',
    year: '2024',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #06020f 0%, #0d0520 50%, #060212 100%)',
    tags: ['React', 'Management'],
    featured: true,
  },
  {
    name: 'Adison.ca',
    icon: 'AD',
    image: adisonImg,
    link: 'https://adison.ca',
    desc: 'A premium, high-performance business website developed using React, focusing on luxury design and seamless user experience.',
    category: 'React Web',
    focus: 'Web Development · React',
    year: '2025',
    accent: '#C9A84C',
    bg: 'linear-gradient(135deg, #0f0a00 0%, #1a1200 50%, #0a0800 100%)',
    tags: ['React', 'Tailwind', 'Web'],
    featured: true,
  },
  {
    name: 'Smart Home App',
    icon: 'SH',
    image: smartHomeImg,
    desc: 'A cross-platform mobile application built with Flutter to control and monitor smart home devices with a clean, intuitive interface.',
    category: 'Flutter App',
    focus: 'Mobile App · IoT · UI/UX',
    year: '2025',
    accent: '#4ADE80',
    bg: 'linear-gradient(135deg, #010d04 0%, #021508 50%, #010d04 100%)',
    tags: ['Flutter', 'Smart Home', 'Mobile'],
    featured: true,
  },
  {
    name: 'Sanad — سَنَد',
    icon: 'سَ',
    desc: 'An Arabic charitable volunteering mobile app built with Flutter, connecting volunteers with the elderly and those with special needs.',
    category: 'Flutter App',
    focus: 'Mobile App · Charity · Arabic',
    year: '2024',
    accent: '#7CB9E8',
    bg: 'linear-gradient(135deg, #020d1a 0%, #041525 50%, #020a14 100%)',
    tags: ['Flutter', 'Social Impact'],
    featured: false,
  },
  {
    name: 'To Do App',
    icon: 'TD',
    desc: 'A productivity-focused task management mobile application built with Flutter, featuring custom reminders and state management.',
    category: 'Flutter App',
    focus: 'Mobile App · Productivity',
    year: '2024',
    accent: '#00E5FF',
    bg: 'linear-gradient(135deg, #000a0d 0%, #001419 50%, #000810 100%)',
    tags: ['Flutter', 'Productivity'],
    featured: false,
  },
  {
    name: 'Fajtec.ca',
    icon: 'FJ',
    desc: 'A corporate web application developed with React, tailored to showcase technical services and facilitate client engagement.',
    category: 'React Web',
    focus: 'Web App · React',
    year: '2025',
    accent: '#D4A96A',
    bg: 'linear-gradient(135deg, #0d0900 0%, #1a1200 50%, #0d0900 100%)',
    tags: ['React', 'Corporate'],
    featured: false,
  },
  {
    name: 'MyPharmacy',
    icon: 'MP',
    desc: 'A cross-platform mobile application built with Flutter that allows patients to manage prescriptions, order medicines, and track deliveries.',
    category: 'Flutter App',
    focus: 'Mobile App · Healthcare',
    year: '2025',
    accent: '#38BDF8',
    bg: 'linear-gradient(135deg, #01111d 0%, #021a2c 50%, #01111d 100%)',
    tags: ['Flutter', 'Healthcare'],
    featured: false,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-label">
            <span>Featured Work</span>
          </div>
          <div className="projects-header">
            <h2 className="display-md projects-title">
              Selected <span className="gold-text">Projects</span>
            </h2>
            <p className="body-lg projects-subtitle">
              A curated selection of cross-platform mobile apps built with Flutter, and web applications built with React.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ marginTop: '4rem' }}>
          {projects.map((project, idx) => (
            <div 
              key={project.name} 
              onClick={() => openProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <hr className="gold-line-full" />
      </div>
    </section>
  )
}
