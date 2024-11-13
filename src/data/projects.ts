export interface Project {
    id: number
    title: string
    category: string
    image: string
}

const projects: Project[] = [
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

export default projects