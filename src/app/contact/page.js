import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import PageHeader from "../components/layout/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1045a2] font-sans">
      <PageHeader title="Contact Us" />

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="text-[#7cb8ff] text-base">
            Ready to start your project? Let's discuss your needs.
          </p>
        </div>

        <ContactForm />
        <ContactInfo />
      </main>
    </div>
  );
}
