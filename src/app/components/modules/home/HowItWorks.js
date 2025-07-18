export default function HowItWorks() {
  const steps = [
    { title: "Luxury Consultation", desc: "Exclusive discovery session to understand your premium vision and requirements." },
    {
      title: "Bespoke Development & Launch",
      desc: "We craft and launch your premium digital experience with meticulous attention to detail.",
    },
    { title: "White-Glove Support", desc: "Continuous premium maintenance and exclusive updates with dedicated support." },
  ];

  return (
    <section className="px-4 py-10">
      <h2 className="text-[#f0c674] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        Our Luxury Process
      </h2>
      <div className="max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Timeline Line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-full bg-[#f0c674] z-0" />
            )}
            
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-8 h-8 bg-[#f0c674] rounded-full flex items-center justify-center">
                <span className="text-[#0d1117] text-sm font-bold">{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-[#f0c674] text-lg font-semibold leading-normal mb-2">
                {step.title}
              </h3>
              <p className="text-[#f0c674] text-base font-normal leading-normal">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
