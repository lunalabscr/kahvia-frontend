import { MessageCircle } from "lucide-react";

export default function Contact() {
  const phoneNumber = "1234567890"; // Placeholder number
  const message = encodeURIComponent(
    "Hello, I would like to know more about Dos Tazas coffee."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-doto font-bold mb-6">Get in Touch</h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto font-roboto">
          Have questions about our beans, brewing methods, or just want to chat
          coffee? We are here to help. Reach out to us directly on WhatsApp.
        </p>
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
        >
          <MessageCircle size={24} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}