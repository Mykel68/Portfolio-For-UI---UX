// This file defines the structure and default content for a Call-To-Action (CTA) component.
// The `CTA` interface specifies the data model, allowing for consistent typing when managing CTA content across the project.
// To customize the CTA displayed on the site, modify the values of `title` and `subtitle` below.

export interface CTA {
    title: string;      // Main headline for the CTA
    subtitle: string;   // Supporting text to provide additional context or encouragement
}

// Default CTA content to be used. Modify as needed.
const cta: CTA = {
    title: "Let’s Design Together",
    subtitle: "Let’s create something amazing together"
}

export default cta
