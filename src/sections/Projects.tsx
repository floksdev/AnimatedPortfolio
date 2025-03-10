import Tag from "@/components/Tag";
import { GlareCard } from "@/components/Card";
import Image from "next/image";
import clock from "@/assets/images/Clock.svg";
import Epitrello from "@/assets/images/EpiTrello.svg";
import Minishell from "@/assets/images/Minishell.svg";
import RType from "@/assets/images/R-Type.svg";

export default function Projects() {
    return (
        <section id="projects" className="py-48">
            <div className="container">
                <div className="flex justify-center items-center flex-col gap-14">
                    <Tag>Quelques projets</Tag>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600" tags={["ReactJS", "NodeJS", "MongoDB"]}>
                            <Image
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src={Epitrello}
                            />
                            <div className="pt-2 h-3/5 w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="font-bold text-white text-xl">
                                        Epitrello
                                    </p>
                                    <p className=" text-white text-s flex flex-raw justify-end gap-1.5">
                                        <Image className="w-5" alt="Clockl" src={clock}></Image>
                                            3 mois
                                    </p>
                                </div>
                                <p className="font-normal text-base text-neutral-200 mt-4">
                                    Une application web de gestion de tâches inspirée de Trello. Conception d\'une API REST, gestion des utilisateurs et implémentation du drag-and-drop pour organiser les tâches.
                                </p>
                            </div>
                        </GlareCard>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600" tags={["C", "Makefile"]}>
                            <Image
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src={Minishell}
                            />
                            <div className="pt-2 h-3/5 w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="font-bold text-white text-xl">
                                        Minishell
                                    </p>
                                    <p className=" text-white text-s flex flex-raw justify-end gap-1.5">
                                        <Image className="w-5" alt="Clockl" src={clock}></Image>
                                            1 mois
                                    </p>
                                </div>
                                <p className="font-normal text-base text-neutral-200 mt-4">
                                    Un mini-interpréteur de commandes fonctionnant comme Bash. Gestion des processus, exécution des commandes Unix, redirections et pipes.
                                </p>
                            </div>
                        </GlareCard>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600" tags={["C++", "SFML", "UDP"]}>
                            <Image
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src={RType}
                            />
                            <div className="pt-2 h-3/5 w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="font-bold text-white text-xl">
                                        R-Type
                                    </p>
                                    <p className=" text-white text-s flex flex-raw justify-end gap-1.5">
                                        <Image className="w-5" alt="Clockl" src={clock}></Image>
                                        2 semaines
                                    </p>
                                </div>
                                <p className="font-normal text-base text-neutral-200 mt-4">
                                    Développement d\'un jeu multijoueur inspiré du classique R-Type. Implémentation d’un moteur réseau en C++ avec UDP pour la communication entre clients et serveur.
                                </p>
                            </div>
                        </GlareCard>
                        </div>
                </div>
            </div>
        </section>
    );
}
