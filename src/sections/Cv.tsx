import Tag from "@/components/Tag";
import { ContainerScroll } from "@/components/ContainerScrollAnimation";
import TitleComponent from "@/components/TitleComponent";

export default function Cv() {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Mon CV</Tag>
                    <ContainerScroll titleComponent={<TitleComponent className="text-6xl font-bold text-white">Envie de continuer<br /> l'aventure ?</TitleComponent>}>
                        
                            <p className="text-white text-lg">
                                Voici mon CV interactif avec un effet de défilement animé.
                            </p>
                    </ContainerScroll>
                </div>
            </div>
        </section>
    );
}
