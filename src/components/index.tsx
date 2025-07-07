"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe } from "lucide-react"
import foto from "../assets/foto.jpeg"
//Logos Tecnologías
import jsLogo from "../assets/logos/tecnologias/js.png"
import clogo from "../assets/logos/tecnologias/c++.png"
import csslogo from "../assets/logos/tecnologias/css.png"
import htmlLogo from "../assets/logos/tecnologias/html.png"
import pythonLogo from "../assets/logos/tecnologias/py.webp"
import javalogo from "../assets/logos/tecnologias/java.webp"
import psql from "../assets/logos/tecnologias/psql.png"
import typescriptlogo from "../assets/logos/tecnologias/typ.png"
// Logo Frameworks 
import expresslogo from "../assets/logos/frameworks/express.png"
import nodelogo from "../assets/logos/frameworks/node.webp"
import reactlogo from "../assets/logos/frameworks/react.png"
import springbootlogo from "../assets/logos/frameworks/springboot.webp"
import nextlogo from "../assets/logos/frameworks/nextjs.png"
//Logos Herramientas
import gitlogo from "../assets/logos/herramientas/git.png"
import dockerlogo from "../assets/logos/herramientas/docker.svg"
import awslogo from "../assets/logos/herramientas/aws.png"
import gcloudlogo from "../assets/logos/herramientas/googlecloud.png"
import postmanlogo from "../assets/logos/herramientas/postman.png"
import vscode from "../assets/logos/herramientas/vscode.png"
import pgadmin from "../assets/logos/herramientas/pgadmin.png"
import styles from "./Portfolio.module.css"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "proyectos", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Sistema de Comparador de Precios de Supermercados",
      description: "Aplicación web completa para comparar precios de productos de diferentes supermercados.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Hotel el descanso",
      description:
        "Aplicación web para gestión de reservas de hotel.",
      technologies: ["React", "Next.js", "PostgreSQL", "Express"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Laberinto Inteligente",
      description: "Laberitno dinamico con IA para resolver laberintos generados aleatoriamente mediante tecincas de Búsqueda.",
      technologies: ["Python"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "IA de batallas Pokemon",
      description: "Panel de control para análisis de datos con visualizaciones interactivas y reportes automatizados.",
      technologies: ["Python"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "BlackJack IA",
      description: "Aplicacion web del famoso juego de BlackJack con IA.",
      technologies: ["Angular", "Spring Boot", "Oracle", "WebSocket"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Por ver",
      description: "Arquitectura de microservicios desplegada en AWS con contenedores Docker y orquestación.",
      technologies: ["Docker", "Kubernetes", "AWS", "Java"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ]
    // Componente TechCarousel
  const TechCarousel = ({ items }: { items: { name: string; image: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerView = 8
    const maxIndex = Math.max(0, items.length - itemsPerView)

    const nextSlide = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView)

    return (
      <div className={styles.carouselContainer}>
        {items.length > itemsPerView && (
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
            aria-label="Anterior"
          >
            <svg className={styles.iconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className={styles.carouselTrack}>
          <div
            className={styles.carouselItems}
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className={styles.techItem}>
                <div className={styles.techImageContainer}>
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className={styles.techImage} />
                </div>
                <span className={styles.techName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {items.length > itemsPerView && (
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
            aria-label="Siguiente"
          >
            <svg className={styles.iconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={styles.portfolio}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>{"<Desarrollador />"}</div>
            <div className={styles.navLinks}>
              {[
                { id: "inicio", label: "Inicio" },
                { id: "proyectos", label: "Proyectos" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${styles.navButton} ${activeSection === item.id ? styles.navButtonActive : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroTitles}>
                <h1 className={styles.heroTitle}>
                  Hola, soy <span className={styles.highlight}>Joseph Herrera</span>
                </h1>
                <h2 className={styles.heroSubtitle}>Ingeniero de Sistemas & Desarrollador de software</h2>
              </div>

              <div className={styles.heroDescription}>
                <p>
                  Soy un apasionado estudiante de ingeniería de Sistemas con enfoque en desarrollo de
                  software y aplicaciones web.
                </p>
                <p>
                  Mi forma de trabajo se centra en la metodologia de desarrollo agil con herramientas como Jira. Tengo experiencia trabajando con tecnologías modernas como
                  React, Next.js, Node.js, Express.js y Python, así como conocimento en Java con SpringBoot.
                </p>
                <p>
                  ¡Siempre estoy buscando nuevos desafíos que me permitan crecer profesionalmente y contribuir al éxito
                  de proyectos!.
                </p>
              </div>

              <div className={styles.heroButtons}>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Ver Proyectos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Contactar
                </button>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://github.com/ImMavz" className={styles.socialLink}>
                  <Github className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/joseph-herrera-097224326/" className={styles.socialLink}>
                  <Linkedin className={styles.icon} />
                </a>
                <a href="josephherrera1407@gmail.com" className={styles.socialLink}>
                  <Mail className={styles.icon} />
                </a>
              </div>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <img src={foto.src} alt="Foto de perfil" className={styles.profileImage} />
              </div>
              <div className={styles.imageBadge}>
                <div className={styles.badgeContent}>
                  <Code className={styles.iconSmall} />
                  <span>Desarrollador de software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tecnologías & Herramientas</h2>
            <p className={styles.sectionDescription}>
              Las tecnologías, frameworks y herramientas de las cuales tengo conocimento para crear soluciones.
            </p>
          </div>

          <div className={styles.techCategories}>
            {/* Tecnologías */}
            <div className={styles.techCategory}>
              <h3 className={styles.categoryTitle}>Tecnologías</h3>
              <TechCarousel
              items={[
                { name: "JavaScript", image: jsLogo.src },
                { name: "TypeScript", image: typescriptlogo.src },
                { name: "Python", image: pythonLogo.src },
                { name: "Java", image: javalogo.src },
                { name: "C++", image: clogo.src },
                { name: "HTML5", image: htmlLogo.src },
                { name: "CSS3", image: csslogo.src },
                { name: "SQL", image: psql.src },
              ]}
              />
            </div>

            {/* Frameworks */}
            <div className={styles.techCategory}>
              <h3 className={styles.categoryTitle}>Frameworks</h3>
              <TechCarousel
              items={[
                { name: "React", image: reactlogo.src },
                { name: "Next.js", image: nextlogo.src },
                { name: "Node.js", image: nodelogo.src },
                { name: "Express", image: expresslogo.src },
                { name: "Spring Boot", image: springbootlogo.src },
              ]}
              />
            </div>

            {/* Herramientas */}
            <div className={styles.techCategory}>
              <h3 className={styles.categoryTitle}>Herramientas</h3>
              <TechCarousel
              items={[
                { name: "Git", image: gitlogo.src },
                { name: "Docker", image: dockerlogo.src },
                { name: "AWS", image: awslogo.src },
                { name: "Google cloud", image: gcloudlogo.src },
                { name: "PostgreSQL", image: pgadmin.src },
                { name: "VS Code", image: vscode.src },
                { name: "Postman", image: postmanlogo.src },
              ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
            <p className={styles.sectionDescription}>
              Una selección de proyectos personales que demuestran mis habilidades técnicas y creatividad
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImg} />
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.projectTechnologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <a href={project.github} className={`${styles.projectLink} ${styles.projectLinkSecondary}`}>
                      <Github className={styles.iconSmall} />
                      <span>Código</span>
                    </a>
                    <a href={project.demo} className={`${styles.projectLink} ${styles.projectLinkPrimary}`}>
                      <ExternalLink className={styles.iconSmall} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trabajemos Juntos</h2>
            <p className={styles.sectionDescription}>
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte
            </p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3>Email</h3>
                    <p>josephherrera1407@gmail.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3>Teléfono</h3>
                    <p>+57 315 6405662</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3>Ubicación</h3>
                    <p>Buga, Valle del cauca, Colombia</p>
                  </div>
                </div>
              </div>

              <div className={styles.techCard}>
                <h3>Tecnologías que manejo</h3>
                <div className={styles.techGrid}>
                  <div className={styles.techItem}>
                    <Code className={styles.icon} />
                    <p>Frontend</p>
                  </div>
                  <div className={styles.techItem}>
                    <Database className={styles.icon} />
                    <p>Backend</p>
                  </div>
                  <div className={styles.techItem}>
                    <Globe className={styles.icon} />
                    <p>Bases de datos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h3>Envíame un mensaje</h3>
                <p>Completa el formulario y te responderé lo antes posible</p>
              </div>

              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="asunto">Asunto</label>
                  <input type="text" id="asunto" placeholder="¿De qué quieres hablar?" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" placeholder="Cuéntame sobre tu proyecto..." rows={5}></textarea>
                </div>
                <button type="submit" className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonFull}`}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 Joseph Herrera Libreros. Desarrollado con ❤️ y mucho café ☕</p>
        </div>
      </footer>
    </div>
  )
}
