"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "antd";
import Tag from "@/components/Tag";
import TitleComponent from "@/components/TitleComponent";
import Button from "@/components/Button";

export default function Contact() {
  const formRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Initialisation avec la clé publique (n'utilisez jamais la clé privée côté client)
    emailjs.init("M5jY8olEbPJDK1hd1");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    emailjs.sendForm("service_kmiuplr", "template_8zwjvpv", formRef.current)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setSuccess("Votre message a été envoyé avec succès !");
        formRef.current.reset();
      }, (error) => {
        console.error("FAILED...", error.text);
        setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.");
      });
  };

  return (
    <section>
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-6">
          <Tag>Contact</Tag>
          <TitleComponent className="text-6xl font-bold text-white w-full md:w-1/2 text-center">
            Hâte de vous <span className="text-violet-600">répondre</span>
          </TitleComponent>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-1/2 grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label htmlFor="user_name" className="sr-only">Votre nom</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Votre nom"
                required
                className="text-white h-12 rounded-lg px-4 bg-black border-2 border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="user_email" className="sr-only">Votre e-mail</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Votre e-mail"
                required
                className="text-white h-12 rounded-lg px-4 bg-black border-2 border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">Votre message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                required
                rows="4"
                className="text-white rounded-lg px-4 py-2 bg-black border-2 border-violet-600 resize-none scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent scrollbar-thumb-rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
              ></textarea>
            </div>
            {error && <Alert className="bg-black" message={error} type="error" showIcon />}
            {success && <Alert message={success} type="success" showIcon />}
            <Button variant="primary" type="submit">Envoyer le message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
