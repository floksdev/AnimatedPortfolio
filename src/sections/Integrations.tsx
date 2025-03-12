import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import photoshopIcon from "@/assets/images/Photoshop.svg";
import cinema4DIcon from "@/assets/images/Cinema4D.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Outil collaboratif de conception d'interfaces." },
    { name: "Notion", icon: notionIcon, description: "Espace de travail tout-en-un pour notes et documents." },
    { name: "Slack", icon: slackIcon, description: "Plateforme de communication d'équipe." },
    { name: "Photoshop", icon: photoshopIcon, description: "Logiciel de création graphique et d'édition d'images." },
    { name: "Cinema4D", icon: cinema4DIcon, description: "Logiciel de modélisation et animation 3D." },
    { name: "GitHub", icon: githubIcon, description: "Plateforme de collaboration pour le code." },
];
  
export type IntegrationType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Logiciels Maîtrisés</Tag>
                    <h2 className="text-6xl font-bold mt-10">Je maîtrise en plus</h2>
                    <h2 className="text-6xl font-bold mt-2"><span className="text-violet-600">tous ces Logiciels</span></h2>
                    <div className="h-[700px] mt-16 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationColumn integrations={integrations}/>
                        <IntegrationColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
