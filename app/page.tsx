"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-screen flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            <span className="text-primary">Most. Romana Akter Ria</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-xl text-muted-foreground md:text-2xl">Front-End Developer</p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection(aboutRef)}
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I'm a passionate front-end developer with a keen eye for design and a love for creating intuitive,
                responsive web applications. With over 5 years of experience in the industry, I specialize in building
                modern web applications using React, Next.js, and TypeScript.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach combines technical expertise with creative problem-solving to deliver exceptional user
                experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web
                development.
              </p>
              <div className="pt-4">
                <Button onClick={() => scrollToSection(contactRef)}>Get in Touch</Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="profile.png?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="bg-muted py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "React", level: "Expert" },
              { name: "Next.js", level: "Expert" },
              { name: "TypeScript", level: "Advanced" },
              { name: "JavaScript", level: "Expert" },
              { name: "HTML/CSS", level: "Expert" },
              { name: "Tailwind CSS", level: "Advanced" },
              { name: "Redux", level: "Advanced" },
              { name: "GraphQL", level: "Intermediate" },
              { name: "Framer Motion", level: "Intermediate" },
              { name: "Jest", level: "Advanced" },
              { name: "Git", level: "Advanced" },
              { name: "Figma", level: "Intermediate" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge>{skill.level}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                description: "A modern e-commerce platform built with Next.js and Stripe integration.",
                tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
                github: "#",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates.",
                tags: ["React", "Firebase", "Redux", "Styled Components"],
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
                github: "#",
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website with animations and dark mode support.",
                tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
                github: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="bg-muted py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Get in Touch</h2>
          <div className="mx-auto max-w-md space-y-4">
            <p className="text-center text-lg text-muted-foreground">
              Interested in working together? Feel free to reach out to me directly at{" "}
              <a href="mailto:contact@example.com" className="text-primary underline underline-offset-4">
                contact@example.com
              </a>{" "}
              or through the form below.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:riaislam88197@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Most. Romana Akter Ria. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Designed and built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

