import Tag from "@/components/Tag";
import { ContainerScroll } from "@/components/ContainerScrollAnimation";
import Button from "@/components/Button";
import TitleComponent from "@/components/TitleComponent";
import CvPreview from "@/assets/images/CvPreview.svg"
import Image from "next/image";

export default function Cv() {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Mon CV</Tag>
                    <ContainerScroll titleComponent={<TitleComponent className="text-6xl font-bold text-white">Envie de continuer<br /><span className="text-violet-600">l'aventure</span> ?</TitleComponent>}>
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                            alt="Cv Preview"
                            src={CvPreview}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    </ContainerScroll>
                </div>
            </div>
        </section>
    );
}
