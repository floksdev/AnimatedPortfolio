import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Integrations from "@/sections/Integrations";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Integrations />
        </>
    )
}
