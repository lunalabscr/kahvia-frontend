import ContactButton from "./ContactButton";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-doto font-bold mb-6">Get in Touch</h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto font-roboto">
          Have questions about our beans, brewing methods, or just want to chat
          coffee? We are here to help. Reach out to us directly on WhatsApp.
        </p>

        <ContactButton />
      </div>
    </section>
  );
}
