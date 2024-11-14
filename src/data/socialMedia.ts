// This file defines the structure and default list of social media profiles, 
// which is used to display social media links with associated icons in the application.
// The `SocialMedia` interface ensures that each entry has a `name` (social platform), 
// `href` (the URL to the profile), and `icon` (React component to display the platform's icon).

import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export interface SocialMedia {
    name: string;            // The name of the social media platform (e.g., "Facebook", "Twitter")
    href: string;            // The URL to the user’s profile on the platform
    icon: React.ElementType; // A React component representing the social media icon
}

// Default array of social media profiles, each containing the platform name, URL, and corresponding icon component.

// N.B this is the author's social media profiles, you can change it to your own profiles.

const socialMedia: SocialMedia[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61552348636303",
        icon: FacebookIcon,
    },
    {
        name: "Twitter",
        href: "https://x.com/_mplus_",
        icon: TwitterIcon,
    },
    {
        name: "Instagram",
        href: "#",
        icon: InstagramIcon,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/devmplus/",
        icon: LinkedinIcon,
    },
    // Add more social media profiles.... but don't disrupt the UI
];

export default socialMedia;
