// This file defines the structure and default list of services offered, 
// providing a type-safe way to manage service data across the application.
// The `Service` interface specifies the properties for each service, including an icon component 
// to represent the service visually, a title, and a description that highlights the service's value.

import { BarChart3, LayoutGrid, Monitor, Smartphone } from "lucide-react"

export interface Service {
    icon: any;          // Icon component to visually represent the service (I used Lucide Icons)
    title: string;      // Title of the service, e.g., "UI/UX" or "Web Design"
    description: string; // Short description explaining the purpose or benefit of the service
}

// Default array of services, each following the `Service` structure.
// Modify as needed to include your own services or customize the existing ones.
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
    // Add more services.... but don't disrupt the UI
]

export default services;
