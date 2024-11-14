"use client"

import { useEffect } from "react"
import Image from "next/image"
import User from "@/data/User"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2,
            },
        },
    }

    const progressVariants = {
        hidden: { width: 0 },
        visible: (progress: number) => ({
            width: `${progress}%`,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        }),
    }

    return (
        <motion.div
            className="container px-4 mx-auto py-20"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}

            id="about"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
                <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-lg flex-shrink-0 mx-auto md:mx-0"
                    variants={imageVariants}
                >
                    <Image
                        src={User.profile.images[1]}
                        alt="Profile photo"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="flex-1 space-y-6">
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h2 className="text-4xl md:text-6xl tracking-widest leading-normal font-bold">About Me</h2>
                        <p className="text-muted-foreground md:text-xl font-normal tracking-widest">
                            {User.profile.about}
                        </p>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        {User.skills.map((skill) => (
                            <motion.div key={skill.name} className="space-y-2" variants={itemVariants}>
                                <div className="flex justify-between text-sm">
                                    <span className="text-2xl leading-normal tracking-wider font-bold">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        variants={progressVariants}
                                        custom={skill.progress}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}