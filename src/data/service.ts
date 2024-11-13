import { BarChart3, LayoutGrid, Monitor, Smartphone } from "lucide-react"

export interface Service {
    icon: any
    title: string
    description: string
}

const services: Service[] = [
    {
        icon: LayoutGrid,
        title: "UI/UX",
        description: "Crafting seamless, user-friendly interfaces that make every digital experience intuitive and engaging."
    },
    {
        icon: Monitor,
        title: "Web Design",
        description: "Designing responsive, visually compelling websites that provide both function and beauty."
    },
    {
        icon: Smartphone,
        title: "App Design",
        description: "Building mobile app designs that prioritize usability, performance, and a delightful user experience."
    },
    {
        icon: BarChart3,
        title: "Graphic Design",
        description: "Creating striking graphics that communicate your brand’s message with clarity and creativity."
    }
]

export default services
