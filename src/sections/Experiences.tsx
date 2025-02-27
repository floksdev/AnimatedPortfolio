import Tag from "@/components/Tag";
import { Timeline } from "@/components/Timeline";

export default function Experiences() {
    const timelineData = [
        {
            title: "Début de l'aventure",
            content: "J'ai commencé mon parcours en tant que développeur en 2015.",
        },
        {
            title: "Première expérience",
            content: <p>J'ai rejoint une startup et travaillé sur des projets innovants.</p>,
        },
        {
            title: "Aujourd'hui",
            content: <p>Je suis un développeur passionné en quête de nouveaux défis.</p>,
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Experiences</Tag>
                    <Timeline data={timelineData}/>
                </div>
            </div>
        </section>
    );
}
