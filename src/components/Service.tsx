"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import User from "@/data/User"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Services() {
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
        <section className="container px-4 mx-auto py-20" ref={ref} id="services">
            <motion.div
                className="text-center max-w-2xl mx-auto mb-12"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
                    Services
                </motion.h2>
                <motion.p className="text-muted-foreground text-balance" variants={itemVariants}>
                    {User.subtitle.service_subtitle}
                </motion.p>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {User.service.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <motion.div key={index} variants={itemVariants}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="border-none shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                                    <CardHeader>
                                        <motion.div
                                            className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon className="w-6 h-6 text-primary" />
                                        </motion.div>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm tracking-wide text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}