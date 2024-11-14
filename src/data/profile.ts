// This file defines the structure and default content for a user profile,
// which can be used to display information about an individual, such as in an "About Me" section.
// The `Profile` interface provides a typed structure, ensuring consistency in 
// properties like `name`, `profession`, `intro`, and `about` throughout the application.

export interface Profile {
    name: string;
    phone: string;               // Phone number in international format (for WhatsApp) without the plus sign
    email: string;               // It will be need to send email to this (your) email
    images: string[];            // The first image is for hero and the second for about
    profession: {                // Details of the individual's professional background
        title: string;           // Specific professional role or expertise, e.g., "UI & UX"
        field: string;           // General field of work, e.g., "Designer"
    };
    intro: string;               // A brief, catchy introduction to the individual’s professional style or focus
    about: string;               // A more detailed description of the individual's background, skills, and passions
    cv: string;                  // A link to the individual's CV or resume
}

// Default profile information to be used in the application, such as on the profile or about page.
// Modify as needed to suit your specific needs.
const profile: Profile = {
    name: "Micheal",
    phone: "9876543210", // Your country code + phone number format without the plus sign 
    email: "michael@example.com",
    images: [
        "/hero-img.svg",    // The Hero Section Image
        "/about-me.svg"     // The About Section Image
    ],
    profession: {
        title: "Frontend",
        field: "Developer",
    },
    intro: "I aim to blend functionality with aesthetics, ensuring designs that are not only visually appealing but also accessible and efficient.",
    about: "I’m passionate about creating clean, intuitive designs that enhance user experiences. With a focus on UX research and visual storytelling, I craft interfaces that are functional, engaging, and accessible.",
    cv: "/path-to-cv.pdf", // CV should be in the /public folder or maybe a notion resume page
};

export default profile;
