// This file defines the structure for storing testimonials from clients or collaborators,
// which is used to display feedback and build trust on the website.
// The `Testimonial` interface ensures that each testimonial contains the necessary details, such as the content, 
// the author’s name, their position, and their image.

export interface Testimonial {
    content: string;  // The text of the testimonial, describing the experience or feedback.
    author: string;   // The name of the person giving the testimonial.
    position: string; // The position or title of the author (e.g., "CEO", "Product Director").
    image: string;    // A URL or path to the image of the person providing the testimonial.
}

// An array of testimonial objects, each containing content, author information, position, and an image.
// This array can be used to display real client or collaborator testimonials on the website,
// showcasing positive experiences and feedback to strengthen credibility and highlight successful projects.
// The imaage should be in the /public/testimonial folder.
const testimonials: Testimonial[] = [
    {
        content: "Working with John was an absolute pleasure. His understanding of user needs and design principles resulted in a seamless user experience. The final product exceeded our expectations and truly reflected our vision.",
        author: "Jane Doe",
        position: "Founder & CEO",
        image: "/testimonial/testimonial1.svg"
    },
    {
        content: "John's designs brought our app to life. His attention to detail and ability to turn complex requirements into simple, user-friendly interfaces was outstanding. We couldn't have asked for a better experience.",
        author: "Sarah Johnson",
        position: "Chief Technology Officer",
        image: "/testimonial/testimonial2.svg"
    },
    {
        content: "The work John did for our platform was game-changing. His creativity and professionalism helped us launch a product that our users absolutely love. We look forward to future collaborations!",
        author: "Michael Chen",
        position: "Product Director",
        image: "/testimonial/testimonial3.svg"
    },
    // Add more testimonials as needed

]

export default testimonials;
