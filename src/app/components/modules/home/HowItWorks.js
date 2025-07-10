export default function HowItWorks() {
  const steps = [
    { title: "Consultation", desc: "Discuss your needs and goals." },
    {
      title: "Development & Launch",
      desc: "We build and launch your website.",
    },
    { title: "Ongoing Support", desc: "Continuous maintenance and updates." },
  ];

  return (
    <section className="px-4 py-10">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        How It Works
      </h2>
      <div className="max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Timeline Line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-full bg-[#2563eb] z-0" />
            )}
            
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-8 h-8 bg-[#f4af00] rounded-full flex items-center justify-center">
                <span className="text-[#1045a2] text-sm font-bold">{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-white text-lg font-semibold leading-normal mb-2">
                {step.title}
              </h3>
              <p className="text-[#7cb8ff] text-base font-normal leading-normal">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
