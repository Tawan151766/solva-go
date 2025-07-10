export default function WhyChoose() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#f0c674] text-[32px] font-bold @[480px]:text-4xl">Luxury Advantages</h1>
        <p className="text-[#f0c674] text-base font-normal">
          SolvaGo is dedicated to delivering premium excellence, ensuring your digital presence maintains the highest standards of luxury, security, and performance.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {[
          {
            title: 'Elite Security',
            desc: "We provide premium security with advanced monitoring and enterprise-grade protection for your digital assets.",
            icon: 'ShieldCheck'
          },
          {
            title: 'Exclusive Updates',
            desc: 'Our expert team delivers cutting-edge features and luxury content updates with white-glove service.',
            icon: 'ClockCounterClockwise'
          },
          {
            title: 'Premium Performance',
            desc: 'We optimize your site with luxury-grade speed and efficiency, delivering exceptional user experiences.',
            icon: 'Presentation'
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 border rounded-lg p-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border-white/20 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10 transition-colors">
            <div className="text-[#f0c674]">
              <strong>{item.title}</strong>
            </div>
            <p className="text-[#f0c674] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}