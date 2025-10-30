
// const navItems = [
//   { name: "Courses", href: "/courses" },
//   { name: "Challenges", href: "/challenges" },
//   { name: "Forum", href: "/forum" },
//   { name: "Resources", href: "/resources" },
// ];

import { navItemType } from "@/types/navItemType";

// Courses | Tutorials | Blog | About | Contact | Login/Signup
export const navItems: navItemType[] = [
    {
        name: "Courses",
        path: "/courses"
    },
    {
        name:"Tutorials",
        path: "/tutorials"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];