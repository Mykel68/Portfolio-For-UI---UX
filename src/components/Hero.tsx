"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import User from "@/data/User"
import { motion } from "framer-motion"

export default function Hero() {

    const message = "Hello, from your portfolio website!.I would love to inquire .....";
    const waUrl = `https://wa.me/${User.profile.phone}?text=${encodeURIComponent(message)}`;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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
                delay: 0.5,
            },
        },
    }

    const socialIconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                delay: 1 + i * 0.1,
            },
        }),
    }

    return (
        <div className="container md:px-4 mx-auto" >
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-24 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col gap-4 max-w-xl">
                    <div >
                        <p className="text-2xl font-semibold tracking-wider">Hi I am</p>
                        <p className="text-4xl md:text-5xl font-bold tracking-wide">
                            <span
                                className="text-primary text-3xl leading-normal font-semibold tracking-widest"
                            >
                                {User.profile.name}
                            </span>
                            <br />
                            <span >{User.profile.profession.title}</span>
                            <br />
                            <span className="pl-32" >{User.profile.profession.field}</span>
                        </p>
                    </div>
                    <motion.p className="text-muted-foreground text-xl font-medium tracking-wide" variants={itemVariants}>
                        {User.profile.intro}
                    </motion.p>
                    <motion.div className="flex gap-4" variants={itemVariants}>
                        <Button className="bg-primary" onClick={() => window.open(waUrl, "_blank")} >Work With Me</Button>
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-500 shadow-lg"
                        variants={imageVariants}
                    >
                        <Image
                            src={User.profile.images[0]}
                            alt="Profile photo"
                            width={320}
                            height={320}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </motion.div>
                    <div className="flex gap-4 justify-center mt-6">
                        {User.social.map((item, index) => (
                            <motion.div key={item.name} custom={index} variants={socialIconVariants}>
                                <Link href={item.href} className="hover:text-orange-500">
                                    <item.icon className="w-5 h-5" />
                                    <span className="sr-only">{item.name}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}