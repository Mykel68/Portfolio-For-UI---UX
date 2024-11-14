"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import User from "@/data/User"

export default function ContactForm() {
    const [email, setEmail] = useState("")
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Construct the mailto link with the email entered
        const mailtoLink = `mailto:${User.profile.email}?subject=Contact from ${email}&body=Hi, I am reaching out to you via your portfolio website. I ...`

        // Open the user's default email client with the pre-filled details
        window.location.href = mailtoLink

        // Toast confirmation
        toast({
            title: "Thanks for reaching out!",
            description: "We'll get back to you soon at " + email,
        })

        setEmail("")
    }

    return (
        <section className="container px-4 mx-auto py-20" id="contact">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{User.cta.title}</h2>
                <p className="text-muted-foreground mb-8">
                    {User.cta.subtitle}
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
                    <Button type="submit" className="bg-primary ">
                        Contact Me
                    </Button>
                </form>
            </div>
        </section>
    )
}
