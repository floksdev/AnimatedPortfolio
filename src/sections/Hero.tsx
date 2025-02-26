import Button from "@/components/Button";
import Pic from "@/assets/images/me.svg";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex items-center justify-center flex-col gap-10">
                    <Image className="w-25" src={Pic}></Image>
                    <div className="py-1 px-3 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full text-white font-bold">✨ Qui-suis-je ?</div>
                </div>
                <h1 className="text-6xl md:text-6xl font-medium text-center mt-6">
                    Curieux et innovant, je vous<br />
                    invite à découvrir un univers<br />
                    où chaque projet est une <br />
                    aventure en devenir
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-3xl mx-auto">
                    Passionné depuis toujours par la technologie et le graphisme, j’ai choisi la <br />
                    programmation pour donner vie à mes idées débordantes. Actuellement étudiant <br/ >
                    en 3ème année à Epitech Paris, je repousse sans cesse les limites de ma créativité.
                </p>
            </div>
        </section>
    );
}
