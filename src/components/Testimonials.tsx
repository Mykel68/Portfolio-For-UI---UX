"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            content: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
            author: "Name",
            position: "CEO",
            image: "/placeholder.svg"
        },
        {
            content: "In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Lorem ipsum dolor sit amet consectetur.",
            author: "Sarah Johnson",
            position: "CTO",
            image: "/placeholder.svg"
        },
        {
            content: "Augue dictum dolor elementum convallis dignissim. Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan malesuada.",
            author: "Michael Chen",
            position: "Director",
            image: "/placeholder.svg"
        }
    ]

    return (
        <section className="container px-4 mx-auto py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
                </p>
            </div>

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                            <Card className="border-none bg-muted/50">
                                <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                                    <div className="flex-shrink-0">
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
        </section>
    )
}