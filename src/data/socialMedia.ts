import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

interface SocialMedia {
    name: string;
    href: string;
    icon: React.ElementType; // Accepts a React component
}

const socialMedia: SocialMedia[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/fawzi.sayed.design",
        icon: FacebookIcon,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/fawzisayeddesign",
        icon: TwitterIcon,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/fawzi.sayed.design",
        icon: InstagramIcon,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/fawzi-sayed-design/",
        icon: LinkedinIcon,
    },
];

export default socialMedia;
