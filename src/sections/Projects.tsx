import Tag from "@/components/Tag";
import { GlareCard } from "@/components/Card";
import Image from "next/image";
import clock from "@/assets/images/Clock.svg";

export default function Projects() {
    return (
        <section>
            <div className="container py-24">
                <div className="flex justify-center items-center flex-col gap-20">
                    <Tag>Quelques projets</Tag>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600">
                            <img
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    Card desc...
                                </p>
                            </div>
                        </GlareCard>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600">
                            <img
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    Card desc...
                                </p>
                            </div>
                        </GlareCard>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-violet-600">
                            <img
                                className="h-2/5 w-full absolute inset-0 object-cover"
                                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    Card desc...
                                </p>
                            </div>
                        </GlareCard>
                        </div>
                </div>
            </div>
        </section>
    );
}
