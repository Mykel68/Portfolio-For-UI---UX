import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import skills from "@/data/skills"

export default function About() {

    return (
        <div className="container md:px-4 mx-auto py-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-lg flex-shrink-0 mx-auto md:mx-0">
                    <Image
                        src="/hero-img.svg"
                        alt="Profile photo"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl tracking-widest leading-normal font-bold">About Me</h2>
                        <p className="text-muted-foreground text-xl font-normal tracking-widest">
                            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nisi lectus netus in. Aliquet donec morbi
                            convallis pretium. Turpis tempus pharetra
                        </p>
                    </div>
                    <div className="space-y-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-2xl leading-normal tracking-wider font-bold ">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.progress}%</span>
                                </div>
                                <Progress
                                    value={skill.progress}
                                    className="h-2 bg-gray-100"
                                    indicatorclassname="bg-orange-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}