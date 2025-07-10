export default function TestimonialCard({ testimonial, imageSrc }) {
  return (
    <div className="p-4">
      <div
        className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-32 min-h-[200px] shadow-lg overflow-hidden relative"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%), url("${imageSrc}")`
        }}
      >
        <div className="flex w-full items-end justify-between gap-4 p-6">
          <div className="flex max-w-[440px] flex-1 flex-col gap-3">
            <blockquote className="text-white text-xl font-bold leading-tight">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-white/90 text-base font-medium leading-normal not-italic">
              {testimonial.name}
              <span className="block text-white/80 text-sm font-normal">
                {testimonial.role}
              </span>
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
}
