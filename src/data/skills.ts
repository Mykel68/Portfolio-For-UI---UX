// This file defines the structure and default data for the skill set.
// The `Skill` interface ensures that each skill has a `name` (representing the skill) and a `progress` value 
// (indicating the proficiency or completion percentage of the skill).

export interface Skill {
    name: string;    // Name of the skill (e.g., "UX", "Web Design")
    progress: number; // Proficiency level of the skill, represented as a percentage (0-100)
}

// Default array of skills, with each skill having a name and associated progress.
// Modify as needed to include or exclude skills based on your specific needs.
const skills: Skill[] = [
    { name: "UX", progress: 90 },
    { name: "Website Design", progress: 80 },
    { name: "App Design", progress: 70 },
    { name: "Graphic Design", progress: 95 },
    // Add more skills.... but don't disrupt the UI

]

export default skills;
