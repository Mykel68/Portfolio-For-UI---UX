interface NavBarLink {
    name: string;
    href: string;
}

const navBarLink: NavBarLink[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About Me",
        href: "/about",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Testimonials",
        href: "/testimonials",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default navBarLink;
