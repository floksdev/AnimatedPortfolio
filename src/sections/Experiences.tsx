import Tag from "@/components/Tag";
import { Timeline } from "@/components/Timeline";

export default function Experiences() {
    const timelineData = [
        {
            title: "2020",
            content: (
                <p>
                  Développeur & Graphiste chez{" "}
                  <span className="text-violet-500 font-bold border border-violet-500 rounded-full px-1">
                    @VerdiEvents
                  </span>
                  <br />
                  - Création de scripts
                  <br />
                  - Création de pages HTML/CSS
                  <br />
                  - Réalisation de flyers, logo, animations
                </p>
            ),
        },
        {
            title: "2023",
            content: (
                <p>
                  Développeur Front-End chez{" "}
                  <span className="text-violet-500 font-bold border border-violet-500 rounded-full px-1">
                    @Kikleo
                  </span>
                  <br />
                  - Gestion & affichage de l’UI
                  <br />
                  - Web-app Responsive
                </p>
            ),
        },
        {
            title: "2025",
            content: (
                <p>
                  Auto-Entrepreneur{" "}
                  <span className="text-violet-500 font-bold border border-violet-500 rounded-full px-1">
                    @Top secret
                  </span>
                  <br />
                  - Boutique e-Commerce
                  <br />
                  - Vente de vêtements concepts
                  <br />
                  - Création de site internet [FullStack]
                </p>
            ),
        }
    ];

    return (
        <section id="experiences" className="py-20 md:py-48">
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Experiences</Tag>
                    <Timeline data={timelineData}/>
                </div>
            </div>
        </section>
    );
}
