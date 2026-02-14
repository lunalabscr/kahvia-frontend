import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactButtonProps {
  text?: string;
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function ContactButton({
  text,
  phoneNumber = "1234567890", // Placeholder, ideally this should be a prop or env variable if global
  message = "Hello, I would like to know more about Dos Tazas coffee.",
  className = "",
}: ContactButtonProps) {
  const { t } = useLanguage();
  const buttonText = text || t.contactButton.defaultText;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle size={24} />
      {buttonText}
    </a>
  );
}
