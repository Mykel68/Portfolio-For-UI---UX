// This file defines the structure and default items for the navigation bar links,
// allowing consistent and type-safe usage across the application.
// The `NavBarLink` interface specifies each link's `name` for display purposes 
// and `href` for navigation, ensuring proper handling of URLs and labels within the nav bar.

interface NavBarLink {
    name: string;   // The display name of the navigation link shown to the user
    href: string;   // The URL or anchor reference the link points to
}

// Default navigation bar links to be used in the application's header or navigation component.
const navBarLink: NavBarLink[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About Me",
        href: "#about"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Testimonials",
        href: "#testimonials"
    },
    {
        name: "Contact",
        href: "#contact"
    },
];

export default navBarLink;
