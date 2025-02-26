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
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl">Design tools shouldn&apos;t slow you down. Layers combine powerful features with an intuitive interface that keeps you in your creative flow.</p>
                <form className="flex border-white/15 rounded-full p-2 mt-8 md:max-w-lg">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4"></input>
                    <Button type="submit" variant='primary' className="whitespace-nowrap" size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
