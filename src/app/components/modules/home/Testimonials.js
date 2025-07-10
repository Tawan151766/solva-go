export default function Testimonials() {
  const people = [
    {
      name: 'Sophia Bennett',
      role: 'CEO of Innovate Solutions',
      quote: 'SolvaGo transformed our online presence. Their expertise and support are unmatched.'
    },
    {
      name: 'Ethan Carter',
      role: 'Founder of TechRise',
      quote: "We've seen a significant improvement in our website's performance since partnering with SolvaGo."
    },
    {
      name: 'Olivia Hayes',
      role: 'Marketing Director at Global Reach',
      quote: 'Their team is responsive and professional, always ensuring our website is running smoothly.'
    }
  ];
  return (
    <section className="px-4 py-10">
      <h2 className="text-white text-[22px] font-bold pb-3">Client Testimonials</h2>
      <div className="flex overflow-x-auto gap-3">
        {people.map((p, i) => (
          <div key={i} className="min-w-60 bg-[#1e40af] border border-[#2563eb] rounded-lg p-4 hover:bg-[#2563eb] transition-colors">
            <p className="text-white font-medium">"{p.quote}"</p>
            <p className="text-[#7cb8ff] text-sm mt-2">{p.name}, {p.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}