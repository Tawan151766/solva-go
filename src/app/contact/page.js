import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import PageHeader from "../components/layout/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] font-sans">
      <PageHeader title="Premium Contact" />

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-[#f0c674] text-2xl font-bold mb-2">Connect with Excellence</h2>
          <p className="text-[#f0c674] text-base">
            Ready to elevate your digital presence? Let's discuss your luxury vision.
          </p>
        </div>

        <ContactForm />
        <ContactInfo />
      </main>
    </div>
  );
}
