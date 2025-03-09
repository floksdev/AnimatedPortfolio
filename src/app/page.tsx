import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Integrations from "@/sections/Integrations";
import Announcement from '@/sections/Announcement';
import Projects from '@/sections/Projects';
import Experience from "@/sections/Experiences";
import Cv from "@/sections/Cv";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Announcement />
            <LogoTicker />
            <Projects />
            <Experience />
            <Integrations />
            <Cv />
            <Contact />
            <Footer />
        </>
    )
}
