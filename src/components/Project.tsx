"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import projects, { Project } from "@/data/projects"
import filters from "@/data/filter"
import User from "@/data/User"
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all")
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === "all") return true
        return project.category.toLowerCase().replace(/\s+/g, "-") === activeFilter
    })

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    }

    return (
        <section className="container px-4 mx-auto py-20" ref={ref} id='projects'>
            <motion.div
                className="text-center max-w-2xl mx-auto mb-12"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
                    My Projects
                </motion.h2>
                <motion.p className="text-muted-foreground text-balance" variants={itemVariants}>
                    {User.subtitle.projects_subtitle}
                </motion.p>
            </motion.div>

            <Tabs
                defaultValue="all"
                value={activeFilter}
                onValueChange={setActiveFilter}
                className="w-full mb-8"
            >
                <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                    {filters.map((filter) => (
                        <TabsTrigger
                            key={filter.value}
                            value={filter.value}
                            className="data-[state=active]:bg-primary border data-[state=active]:text-white rounded-full py-2 px-6 transition-all duration-300 ease-in-out"
                        >
                            {filter.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-20"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                >
                    {filteredProjects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            {project.url ? (
                                <Link href={project.url}>
                                    <ProjectCard project={project} />
                                </Link>
                            ) : (
                                <ProjectCard project={project} />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
        >
            <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all cursor-pointer h-full">
                <CardContent className="p-0 h-full">
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <div className="text-sm text-primary mb-2">{project.category}</div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}