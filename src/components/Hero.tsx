import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import User from "@/data/User";

export default function Hero() {
    return (
        <div className="container md:px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
                <div className="flex flex-col gap-4 max-w-xl">
                    <div className="">
                        <p className="text-2xl font-semibold tracking-wider">Hi I am</p>
                        <p className="text-4xl md:text-5xl font-bold tracking-wide">
                            <span className="text-orange-500 text-3xl leading-normal font-semibold tracking-widest">
                                {User.profile.name}
                            </span>
                            <br />
                            <span className="">{User.profile.profession.title}</span>
                            <br />
                            <span className="pl-32">{User.profile.profession.field}</span>
                        </p>
                    </div>
                    <p className="text-muted-foreground text-xl font-medium tracking-wide">
                        {User.profile.intro}
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-orange-500 hover:bg-orange-600">Hire Me</Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-500 shadow-lg">
                        <Image
                            src="/hero-img.svg"
                            alt="Profile photo"
                            width={320}
                            height={320}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div className="flex gap-4 justify-center mt-6">
                        {User.social.map((item) => (
                            <Link href={item.href} key={item.name} className="hover:text-orange-500">
                                <item.icon className="w-5 h-5" />
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
