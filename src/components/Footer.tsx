import Link from "next/link"

import navBarLink from "../data/navBarLink"
import socialMedia from "@/data/socialMedia"

const navigation = navBarLink.map((item) => {
    return {
        name: item.name,
        href: item.href,
    }
})

const social = socialMedia.map((item) => {
    return {
        name: item.name,
        href: item.href,
        icon: item.icon
    }
})
export default function Footer() {
    return (
        <footer className="bg-muted/40">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center gap-8">
                    <Link href="/" className="text-2xl font-bold">
                        FAWZI<span className="text-orange-500">UX</span>
                    </Link>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex gap-6">
                        {social.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label={item.name}
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}