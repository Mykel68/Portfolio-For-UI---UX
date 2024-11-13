"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import navBarLink from "@/data/navBarLink"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const NavLinks = () => (
        <>
            {navBarLink.map((item) => (
                <Link
                    key={item.href}
                    className="text-sm tracking-widest font-medium hover:underline underline-offset-4"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex  items-center justify-between w-full">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-lg font-bold">Name - Logo</span>
                    </Link>
                    <nav className="flex items-center space-x-6 mx-auto text-sm font-medium">
                        <NavLinks />
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button asChild className="hidden md:inline-flex">
                            <Link href="/path-to-cv.pdf">Download CV</Link>
                        </Button>
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
                            <div className="px-7">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-lg font-bold">Name - Logo</span>
                                </Link>
                            </div>
                            <nav className="flex flex-col gap-4 px-7 mt-10">
                                <NavLinks />
                                <Button asChild>
                                    <Link href="/path-to-cv.pdf" onClick={() => setIsOpen(false)}>
                                        Download CV
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}