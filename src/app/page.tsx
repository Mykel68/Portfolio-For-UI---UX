import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Projects from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
