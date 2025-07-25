export default function Hero() {
  return (
    <section className="@container @[480px]:p-4">
      <div
        className="flex min-h-[480px] flex-col gap-6 items-center justify-center bg-cover bg-center bg-no-repeat p-4 @[480px]:rounded-lg"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("/nasa-cover.jpg")',
        }}
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black @[480px]:text-5xl">
            Premium Digital Excellence
          </h1>
          <h2 className="text-white text-sm @[480px]:text-base">
            SolvaGo delivers luxury web solutions with unmatched sophistication
            and premium craftsmanship for discerning clients.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-lg bg-[#f0c674] text-[#0d1117] text-sm @[480px]:text-base font-bold hover:bg-[#f0c674] transition-colors">
            Experience Luxury
          </button>
          <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-lg bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md text-[#f0c674] text-sm @[480px]:text-base font-bold hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10 transition-colors border border-white/20">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
