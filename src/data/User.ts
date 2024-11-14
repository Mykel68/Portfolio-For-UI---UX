// Do not change this file
// This file is used to generate the user data
// To change the user data change the data in the /data folder but do not change this file

import services from "@/data/service";
import projects from "@/data/projects";
import skills from "./skills";
import socialMedia from "./socialMedia";
import Profile from "@/data/profile";
import testimonials from "./testimonial";
import cta from "./cta"

import { User as UserType } from "@/types/userType";
import subtitle from "./subtitle";

const User: UserType = {
    subtitle: subtitle,
    profile: Profile,
    skills: skills,
    service: services,
    projects: projects,
    social: socialMedia,
    testimonials: testimonials,
    cta: cta
};

export default User;
