import Tag from "@/components/Tag";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];


export default function Footer() {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center items-center flex-col">
                    <Tag>Footer</Tag>
                </div>
            </div>
        </section>
    );
}
