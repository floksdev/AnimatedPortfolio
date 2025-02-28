"use client";
import { useState } from "react";
import Tag from "@/components/Tag";
import TitleComponent from "@/components/TitleComponent";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire, par exemple envoi via API
    console.log(formData);
  };

  return (
    <section>
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-6">
          <Tag>Contact</Tag>
          <TitleComponent className="text-6xl font-bold text-white w-full md:w-1/2 text-center">
            Hâte de vous <span className="text-violet-600">répondre</span>
          </TitleComponent>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 grid grid-cols-1 gap-10">
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-white h-12 rounded-lg px-4 border-violet-600 border-2 bg-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Votre e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-white h-12 rounded-lg px-4 border-violet-600 border-2 bg-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="text-white rounded-lg px-4 py-2 bg-black border-violet-600 border-2 resize-none scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent scrollbar-thumb-rounded"
              ></textarea>
            </div>
            <Button variant="primary" type="submit">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
