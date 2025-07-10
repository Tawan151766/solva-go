import TestimonialList from "../components/modules/testimonials/TestimonialList";
import PageHeader from "../components/layout/PageHeader";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans flex flex-col">
      <PageHeader title="Testimonials" />

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center px-4 py-8">
          <h2 className="text-[#1d180c] text-3xl font-bold leading-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-[#a18745] text-base leading-relaxed max-w-md mx-auto">
            See what our clients have to say about their experience with
            SolvaGo.
          </p>
        </div>

        {/* Testimonials */}
        <TestimonialList />
      </main>
    </div>
  );
}
