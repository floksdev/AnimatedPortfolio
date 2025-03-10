
import Tag from "@/components/Tag";
import { Timeline } from "@/components/Timeline";

export default function Experiences() {
    const timelineData = [
        {
            title: "2020",
            content: (
                <p>
                Développeur & Graphiste chez{" "}
                <span className="text-violet-500 font-bold border-violet-500 border-2 rounded-full pr-1 pl-1">
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
                    Développeur Front-End chez {" "}
                <span className="text-violet-500 font-bold border-violet-500 border-2 rounded-full pr-1 pl-1">
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
                Auto-Entreprenneur {" "}
                <span className="text-violet-500 font-bold border-violet-500 border-2 rounded-full pr-1 pl-1">
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
        <section id="experiences" className="py-48">
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Experiences</Tag>
                    <Timeline data={timelineData}/>
                </div>
            </div>
        </section>
    );
}
