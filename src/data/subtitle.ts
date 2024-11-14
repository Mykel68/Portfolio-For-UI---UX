// This file defines the structure and default subtitles for different sections of the website, 
// providing text used to introduce or describe each section's content. 
// The `Subtitle` interface ensures that each section has a corresponding subtitle for consistency and clarity.

export interface Subtitle {
    service_subtitle: string;      // Subtitle for the "Services" section, describing the services offered
    projects_subtitle: string;     // Subtitle for the "Projects" section, introducing the showcased work
    testimonials_subtitle: string; // Subtitle for the "Testimonials" section, introducing client feedback
}

// Default subtitles for the different sections of the website. 
// Modify as needed to suit your specific needs.
const subtitle: Subtitle = {
    service_subtitle: "I design intuitive, user-centered experiences that bridge the gap between functionality and beauty.",
    projects_subtitle: "Explore a collection of my work, where creativity meets precision to deliver impactful digital solutions.",
    testimonials_subtitle: "Hear from my clients and collaborators about how we transformed their ideas into successful digital experiences.",
}

export default subtitle;
