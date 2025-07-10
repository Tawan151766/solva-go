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
      <h2 className="text-[#1d180c] text-[22px] font-bold pb-3">Client Testimonials</h2>
      <div className="flex overflow-x-auto gap-3">
        {people.map((p, i) => (
          <div key={i} className="min-w-60 bg-[#fcfbf8] border border-[#eae1cd] rounded-lg p-4">
            <p className="text-[#1d180c] font-medium">"{p.quote}"</p>
            <p className="text-[#a18745] text-sm mt-2">{p.name}, {p.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}