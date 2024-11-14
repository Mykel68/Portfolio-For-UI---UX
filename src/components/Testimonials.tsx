"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react'
import User from "@/data/User"
import Autoplay from "embla-carousel-autoplay"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Testimonials() {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="container px-4 mx-auto py-20"
            id="testimonials"
        >
            <motion.div className="text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                <p className="text-muted-foreground text-balance">
                    {User.subtitle.testimonials_subtitle}
                </p>
            </motion.div>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {User.testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Card className="border-none bg-muted/50 h-full">
                                    <CardContent className="flex flex-col md:flex-row gap-6 p-6 h-full">
                                        <div className="flex-shrink-0">
                                            <motion.div
                                                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="relative">
                                                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-500 opacity-20" />
                                                <blockquote className="pt-4 text-muted-foreground">
                                                    {testimonial.content}
                                                </blockquote>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{testimonial.author}</div>
                                                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 rounded-full aspect-square" />
                <CarouselNext className="hidden md:flex -right-12 rounded-full aspect-square" />
            </Carousel>
        </motion.section>
    )
}