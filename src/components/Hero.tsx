import { Button } from "@/components/ui/button"
import socialMedia from "@/data/socialMedia"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
                <div className="flex flex-col gap-4 max-w-xl">
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold tracking-wider">Hi I am</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
                            <span className="text-orange-500 text-3xl leading-normal font-semibold tracking-widest">
                                Fawzi Sayed
                            </span>
                            <br />
                            <span className="">UI & UX</span> {/* Add padding to create space */}
                            <br />
                            <span className="pl-32">Designer</span> {/* Add more padding for space */}
                        </h1>

                    </div>
                    <p className="text-muted-foreground text-xl font-medium tracking-wide">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nisi lectus netus in. Aliquet donec morbi convallis
                        pretium. Turpis tempus pharetra
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-orange-500 hover:bg-orange-600">Hire Me</Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80  rounded-full overflow-hidden border-8 border-blue-500 shadow-lg">
                        <Image
                            src="/hero-img.svg"
                            alt="Profile photo"
                            width={320}
                            height={320}
                            className="w-full h-full rounded-full object-cover "
                        />
                    </div>
                    <div className="flex gap-4 justify-center mt-6">

                        {socialMedia.map((item) => (
                            <Link href={item.href} key={item.name} className="hover:text-orange-500">
                                <item.icon className="w-5 h-5" />
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}