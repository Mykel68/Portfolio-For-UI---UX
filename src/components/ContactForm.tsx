"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
    const [email, setEmail] = useState("")
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the form submission
        toast({
            title: "Thanks for reaching out!",
            description: "We'll get back to you soon at " + email,
        })
        setEmail("")
    }

    return (
        <section className="container px-4 mx-auto py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Lets Design Together</h2>
                <p className="text-muted-foreground mb-8">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                    />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                        Contact Me
                    </Button>
                </form>
            </div>
        </section>
    )
}