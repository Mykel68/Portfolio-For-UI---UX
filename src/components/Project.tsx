"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all")

    const projects = [
        {
            id: 1,
            title: "AirCalling Landing Page Design",
            category: "Web Design",
            image: "/1/Web Designs-1.svg",
        },
        {
            id: 2,
            title: "Business Landing Page Design",
            category: "Web Design",
            image: "/2/Web Designs-1.svg",
        },
        {
            id: 3,
            title: "Ecom Web Page Design",
            category: "App Design",
            image: "/2/Web Designs-2.svg",
        },
        // Add more projects as needed
    ]

    const filters = [
        { value: "all", label: "All" },
        { value: "ui-ux", label: "UI/UX" },
        { value: "web-design", label: "Web Design" },
        { value: "app-design", label: "App Design" },
        { value: "graphic-design", label: "Graphic Design" },
    ]

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === "all") return true
        return project.category.toLowerCase().replace(/\s+/g, "-") === activeFilter
    })

    return (
        <section className="container px-4 mx-auto py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                <p className="text-muted-foreground text-balance">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
                </p>
            </div>

            <Tabs
                defaultValue="all"
                value={activeFilter}
                onValueChange={setActiveFilter}
                className="w-full mb-8"
            >
                <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                    {filters.map((filter) => (
                        <TabsTrigger
                            key={filter.value}
                            value={filter.value}
                            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-full px-6"
                        >
                            {filter.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-0">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-orange-500 mb-2">{project.category}</div>
                                <h3 className="font-semibold text-lg">{project.title}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}