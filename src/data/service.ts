import { BarChart3, LayoutGrid, Monitor, Smartphone } from "lucide-react"

interface Service {
    icon: any
    title: string
    description: string
}

const services: Service[] = [
    {
        icon: LayoutGrid,
        title: "UI/UX",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
        icon: Monitor,
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
        icon: Smartphone,
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
        icon: BarChart3,
        title: "Graphic Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    }
]

export default services