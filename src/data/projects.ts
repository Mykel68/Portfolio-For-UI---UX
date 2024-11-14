// This file defines the structure for individual project entries and provides a default list of projects.
// The `Project` interface specifies the properties each project must contain, including an optional URL.

//  NOte add space in between words if they are more than one word in the category
//  Category should be in the format of "UI UX" or "Web Design"

export interface Project {
    id: number;         // Unique identifier for each project
    title: string;      // Title or name of the project
    category: string;   // Category of the project, such as "Web Design" or "UI/UX"
    image: string;      // Path to the project's image asset
    url?: string;       // Optional external link or URL related to the project
}

// Default array of projects, showcasing sample work or portfolio items.
// Modify as needed to include your own projects.
const projects: Project[] = [
    {
        id: 1,
        title: "AirCalling Landing Page Design",
        category: "Web Design",
        image: "/1/Web Designs.svg"
    },
    {
        id: 2,
        title: "Business Landing Page Design",
        category: "Web Design",
        image: "/1/Web Designs-1.svg"
    },
    {
        id: 3,
        title: "Ecom Web Page Design",
        category: "App Design",
        image: "/2/Web Designs.svg"
    },
    {
        id: 4,
        title: "Dashboard Landing Page Design",
        category: "App Design",
        image: "/2/Web Designs-1.svg"
    },
    {
        id: 5,
        title: "Hello Landing Page Design",
        category: "Graphic Design",
        image: "/2/Web Designs-2.svg"
    },
    {
        id: 6,
        title: "Queens Web Page Design",
        category: "Graphic Design",
        image: "/2/Web Designs-3.svg"
    },
    {
        id: 7,
        title: "Hello Mockup Design",
        category: "UI UX",
        image: "/2/Web Designs-2.svg"
    },
    {
        id: 8,
        title: "Queens Mockup Design",
        category: "UI UX",
        image: "/2/Web Designs-3.svg"
    },
    // Add more projects.... but don't disrupt the UI
];

export default projects;
