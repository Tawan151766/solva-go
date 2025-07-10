export default function Hero() {
  return (
    <section className="@container @[480px]:p-4">
      <div className="flex min-h-[480px] flex-col gap-6 items-center justify-center bg-cover bg-center bg-no-repeat p-4 @[480px]:rounded-lg"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRLu1bDz4FgJxJ1V90Mgb3yvWNW1aIrZhAgvj6QzWSnN2yu_UurAJn9l99hvo3YYfdiKDoAKOdO0bpv4Cu-wAwIa7xROQm0qPBHdZrr38WdK-CgXmS1UxjJ8ZAKGfsj9NY7ZvMKB83WNLTpXFNjIe5nht4LeVjKRDBq5Q7E6vHexurPpx-g9mWESAHSH4Zk7U2t1ZcsIBXAcpY01npbJSqCf2ZpDBiuu21HDpmXdUsp02NpD_wJ3FlHVhKqWT3aBdY-7jYFpnDRSU")'
        }}
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black @[480px]:text-5xl">Your Website, Our Expertise</h1>
          <h2 className="text-white text-sm @[480px]:text-base">SolvaGo provides comprehensive website development and maintenance, ensuring your online presence is always at its best.</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-lg bg-[#f4af00] text-[#1045a2] text-sm @[480px]:text-base font-bold hover:bg-[#e09e00] transition-colors">Get Started</button>
          <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-lg bg-[#1e40af] text-white text-sm @[480px]:text-base font-bold hover:bg-[#2563eb] transition-colors">Learn More</button>
        </div>
      </div>
    </section>
  );
}