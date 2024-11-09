import React from 'react'
import navBarLink from '@/data/navBarLink'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <div className="text-lg font-bold"> Name - Logo</div>
            <nav className="flex gap-10 items-center">
                {navBarLink.map((item) => (
                    <div key={item.href}>
                        <Link className="text-sm tracking-widest font-medium hover:underline underline-offset-4" href={item.href}>
                            {item.name}
                        </Link>
                    </div>
                ))}
                <Link href="/path-to-cv.pdf" passHref>
                    <Button variant="default">Download CV</Button>
                </Link>
            </nav>
        </header>
    )
}
