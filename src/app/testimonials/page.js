import TestimonialList from "../components/modules/testimonials/TestimonialList";
import PageHeader from "../components/layout/PageHeader";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] font-sans flex flex-col">
      <PageHeader title="Elite Testimonials" />

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center px-4 py-8">
          <h2 className="text-[#f0c674] text-3xl font-bold leading-tight mb-3">
            What Our Elite Clients Say
          </h2>
          <p className="text-[#ffd700] text-base leading-relaxed max-w-md mx-auto">
            Discover what our distinguished clients have to say about their premium experience with
            SolvaGo.
          </p>
        </div>

        {/* Testimonials */}
        <TestimonialList />
      </main>
    </div>
  );
}
