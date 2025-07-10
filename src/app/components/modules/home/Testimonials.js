export default function Testimonials() {
  const people = [
    {
      name: 'Victoria Sterling',
      role: 'CEO of Prestige Enterprises',
      quote: 'SolvaGo delivered an extraordinary digital experience that perfectly embodies our luxury brand. Their attention to detail is unmatched.'
    },
    {
      name: 'Alexander Cross',
      role: 'Founder of Elite Ventures',
      quote: "The premium quality and sophisticated design exceeded our expectations. SolvaGo truly understands luxury digital craftsmanship."
    },
    {
      name: 'Isabella Blackwood',
      role: 'Director at Platinum Holdings',
      quote: 'Their white-glove service and exclusive support have elevated our digital presence to new heights of elegance and performance.'
    }
  ];
  return (
    <section className="px-4 py-10">
      <h2 className="text-[#f0c674] text-[22px] font-bold pb-3">Elite Client Testimonials</h2>
      <div className="flex overflow-x-auto gap-3">
        {people.map((p, i) => (
          <div key={i} className="min-w-60 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10 transition-colors">
            <p className="text-[#f0c674] font-medium">"{p.quote}"</p>
            <p className="text-[#f0c674] text-sm mt-2">{p.name}, {p.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}