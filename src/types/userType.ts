import { Service } from "@/data/service";
import { Project } from "@/data/projects";
import { Skill } from "@/data/skills";
import { SocialMedia } from "@/data/socialMedia";
import { Profile } from "@/data/profile";
import { Subtitle } from "@/data/subtitle";
import { Testimonial } from "@/data/testimonial";
import { CTA } from "@/data/cta";

export interface User {
    subtitle: Subtitle;
    profile: Profile;
    skills: Skill[];
    service: Service[];
    projects: Project[];
    social: SocialMedia[];
    testimonials: Testimonial[];
    cta: CTA
}
