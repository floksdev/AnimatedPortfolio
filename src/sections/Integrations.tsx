import Tag from "@/components/Tag";
import Image from "next/image";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import photoshopIcon from "@/assets/images/Photoshop.svg";
import cinema4DIcon from "@/assets/images/Cinema4D.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import blenderIcon from "@/assets/images/Blender.svg";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Photoshop", icon: photoshopIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Cinema4D", icon: cinema4DIcon, description: "Framer is a professional website prototyping tool." },
    { name: "Blender", icon: blenderIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Logiciels Maîtrisés</Tag>
                    <h2 className="text-6xl font-bold mt-10">Je maîtrise également</h2>
                    <h2 className="text-6xl font-bold mt-2">plusieurs <span className="text-violet-600">Logiciels</span></h2>
                    <div className="h-[700px] mt-16 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationColumn integrations={integrations}/>
                        <IntegrationColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
