import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import illustration from "@/public/404-illustration.svg";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white">
      <div className="text-center">
        <Image
          src={illustration}
          alt="404 Illustration"
          width={400}
          height={300}
          className="mb-8"
        />
        <h1 className="text-6xl font-bold text-violet-600 mb-4">404</h1>
        <p className="text-2xl mb-8">Oups ! Cette page n&apos;existe pas.</p>
        <Link href="/">
          <Button variant="primary">Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  );
}