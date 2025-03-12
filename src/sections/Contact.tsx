"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@/components/Alert";
import Tag from "@/components/Tag";
import TitleComponent from "@/components/TitleComponent";
import Button from "@/components/Button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{
    user_name?: string;
    user_email?: string;
    message?: string;
  }>({});

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "user_name") {
        if (value.trim() === "") {
          newErrors.user_name = "Veuillez renseigner votre nom.";
        } else {
          delete newErrors.user_name;
        }
      }

      if (name === "user_email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === "") {
          newErrors.user_email = "Veuillez renseigner votre e-mail.";
        } else if (!emailRegex.test(value.trim())) {
          newErrors.user_email = "Veuillez saisir un e-mail valide.";
        } else {
          delete newErrors.user_email;
        }
      }

      if (name === "message") {
        if (value.trim() === "") {
          newErrors.message = "Veuillez renseigner votre message.";
        } else {
          delete newErrors.message;
        }
      }

      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!formRef.current) {
      setError("Le formulaire n'est pas chargé.");
      return;
    }
  
    const form = formRef.current;
    const nameValue = form.user_name.value.trim();
    const emailValue = form.user_email.value.trim();
    const messageValue = form.message.value.trim();
    
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess("Votre message a été envoyé avec succès !");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError(
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard."
          );
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-10">
          <Tag>Contact</Tag>
          <TitleComponent className="mt-6 text-6xl font-bold text-white w-full md:w-1/2 text-center">
            Hâte de vous <span className="text-violet-600">répondre</span>
          </TitleComponent>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 grid grid-cols-1 gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="user_name" className="sr-only">
                Votre nom
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Votre nom"
                onChange={handleChange}
                className={`text-white h-12 rounded-lg px-4 bg-black border-2
                  focus:outline-none focus:ring-2 focus:ring-violet-600
                  ${errors.user_name ? "border-4 border-violet-600" : "border-violet-600"}
                `}
              />
              {errors.user_name && (
                <p className="text-violet-500 mt-1">{errors.user_name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="user_email" className="sr-only">
                Votre e-mail
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Votre e-mail"
                onChange={handleChange}
                className={`text-white h-12 rounded-lg px-4 bg-black border-2
                  focus:outline-none focus:ring-2 focus:ring-violet-600
                  ${errors.user_email ? "border-4 border-violet-600" : "border-violet-600"}
                `}
              />
              {errors.user_email && (
                <p className="text-violet-500 mt-1">{errors.user_email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                onChange={handleChange}
                className={`text-white rounded-lg px-4 py-2 bg-black border-2 resize-none h-32
                  scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent scrollbar-thumb-rounded
                  focus:outline-none focus:ring-2 focus:ring-violet-600
                  ${errors.message ? "border-4 border-violet-600" : "border-violet-600"}
                `}
              />
              {errors.message && (
                <p className="text-violet-500 mt-1">{errors.message}</p>
              )}
            </div>

            {error && (
              <Alert
                message="Erreur"
                description={error}
                duration={5000}
                onClose={() => setError("")}
              />
            )}
            {success && (
              <Alert
                message="Merci !"
                description={success}
                duration={5000}
                onClose={() => setSuccess("")}
              />
            )}

            <Button variant="primary" type="submit">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}