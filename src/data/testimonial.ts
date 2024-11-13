export interface Testimonial {
    content: string;
    author: string;
    position: string;
    image: string;
}

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
    // {
    //     content: "Working with John was an absolute pleasure. His understanding of user needs and design principles resulted in a seamless user experience. The final product exceeded our expectations and truly reflected our vision.",
    //     author: "Jane Doe",
    //     position: "Founder & CEO",
    //     image: "/testimonial/testimonial1.svg"
    // }
]

export default testimonials;
