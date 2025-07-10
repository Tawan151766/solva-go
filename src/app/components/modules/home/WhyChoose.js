export default function WhyChoose() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-[32px] font-bold @[480px]:text-4xl">Key Benefits</h1>
        <p className="text-[#7cb8ff] text-base font-normal">
          SolvaGo is committed to delivering exceptional service, ensuring your website remains secure, up-to-date, and performs optimally.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {[
          {
            title: 'Reliable Security',
            desc: "We prioritize your website's security with regular updates and monitoring.",
            icon: 'ShieldCheck'
          },
          {
            title: 'Consistent Updates',
            desc: 'Our team ensures your website stays current with the latest features and content.',
            icon: 'ClockCounterClockwise'
          },
          {
            title: 'Performance Driven',
            desc: 'We optimize your site for speed and efficiency, enhancing user experience.',
            icon: 'Presentation'
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 border rounded-lg p-4 bg-[#1e40af] border-[#2563eb] hover:bg-[#2563eb] transition-colors">
            <div className="text-white">
              <strong>{item.title}</strong>
            </div>
            <p className="text-[#7cb8ff] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}