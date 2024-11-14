"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import navBarLink from "@/data/navBarLink"
import User from "@/data/User"
import { splitWord } from '@/lib/splitWord'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { firstPart, secondPart } = splitWord(User.profile.name);

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    const NavLinks = () => (
        <>
            {navBarLink.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                    <Link
                        className="text-sm tracking-widest font-medium hover:underline underline-offset-4"
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                </motion.div>
            ))}
        </>
    )

    return (
        <motion.header
            className="sticky top-0 z-50 w-full py-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container flex h-14 items-center mx-auto md:px-12">
                <div className="mr-4 hidden md:flex items-center justify-between w-full">
                    <motion.div variants={itemVariants}>
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="text-2xl font-bold">
                                {firstPart}
                                <span className="text-orange-500">{secondPart}</span>
                            </span>
                        </Link>
                    </motion.div>
                    <motion.nav className="flex items-center space-x-6 mx-auto text-sm font-medium">
                        <NavLinks />
                    </motion.nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <motion.div variants={itemVariants}>
                            <Button asChild className="hidden md:inline-flex">
                                <Link href={User.profile.cv} download >View CV</Link>
                            </Button>
                        </motion.div>
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    >
                                        <div className="">
                                            <Link
                                                href="/"
                                                className="flex items-center"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="text-2xl font-bold">
                                                    {firstPart}
                                                    <span className="text-orange-500">{secondPart}</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <motion.nav
                                            className="flex flex-col gap-4 mt-10"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <NavLinks />
                                            <motion.div variants={itemVariants}>
                                                <Button asChild className='w-40'>
                                                    <Link href={User.profile.cv} onClick={() => setIsOpen(false)}>
                                                        View CV
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </motion.nav>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}