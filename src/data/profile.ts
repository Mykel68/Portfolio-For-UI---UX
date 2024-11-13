export interface Profile {
    name: string;
    profession: {
        title: string;
        field: string;
    };
    intro: string;
    about: string;
}

const profile: Profile = {
    name: "Micheal",
    profession: {
        title: "UI & UX",
        field: "Designer",
    },
    intro: "I aim to blend functionality with aesthetics, ensuring designs that are not only visually appealing but also accessible and efficient.",
    about: "I’m passionate about creating clean, intuitive designs that enhance user experiences. With a focus on UX research and visual storytelling, I craft interfaces that are functional, engaging, and accessible.",
};

export default profile;
