import { PlanCard } from "../components/modules/service/PlanCard";

const plans = [
  {
    title: "Elite Essential",
    subtitle: "Premium Website Care",
    description:
      "Perfect for discerning businesses seeking luxury online presence. Includes premium maintenance and enterprise security.",
    price: "$299/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNT3pPdUp6x2wJOuNi8dXtgUTYUdK-FR-SgOaMzHd29Id8ygKlCqHrb8ifdiHmQE9W87_HfpPYJzdIen7Y7ovVJGxiBLycRphSSYRboIDXvIrZbRn0B6LPz6UtqtLGfQXrmRkrI7xL-_UtuIfsnrOC4WMTKPH0WFW7LK-Aw-5T1IDHo--jT8XaLk5XBzITQZIutR8xIYUJFezK7tc3qPXsQT_aPO0kRJBjezsFDxuFRf7SbdOBYASHdzVuxj8sqQcZ2yNr05RfX3A",
  },
  {
    title: "Executive Pro",
    subtitle: "Advanced Luxury Management",
    description:
      "Ideal for growing luxury brands requiring sophisticated features and white-glove support.",
    price: "$599/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSj4par_zIaS2W8yJihLCPG2vUU8ZVFUk4oeMPDShlFtJliPJi6WR2vvLsdj-f_8rBLklOoSx4NSaPnwFGj-kh54sZQrey0HqsNfbYTUMW2NlZdGaxKmq1MClhVZBLHF7-2KweFYIMywIVK_mQ5Z6mV06WGhEhc5DQvtS5kag80Xq8F_M2Wk1gGI27fnfIAb1MMtwqBkh0NlIRWf24PojXx339Wq62jnHtrr3Pkj7_0ZaZaJ1RFiJz3FOM07ZiJ79KdJcYY3Dl7VM",
  },
  {
    title: "Platinum Elite",
    subtitle: "Ultimate Luxury Experience",
    description:
      "Exclusively for premium brands demanding the highest level of performance, security, and dedicated concierge support.",
    price: "$1,299/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT_WdGzsdw32SDi4jk1tcbi1iSnvYFsY_XVZtuukb8XlsHTp2HygUde9sF_hQkekYtde6L8lpagozO-9KKYODRLanG4QoEHIF13CeQ2bH-7jYeJKVd3sQgaSkGXFiIkFwI39sOn9b27k6XBsa9VTzM0JfVLbzt6b7M9yA7Srp_Z2h7Q6SMB_oA9I4Tg5qGbLKlD9chXeSGvg3ZlWWj7sGuw2dprZctvl63CRQxy0EaHRLIS7qGXjlSG2A7ajIzVfgXk6QawjSUB5U",
  },
];

export default function ServicePage() {
  return (
    <main className="bg-[#0d1117] min-h-screen">
      <div className="px-4 pt-6 pb-3">
        <h2 className="text-[#f0c674] text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Select Your Premium Plan
        </h2>
      </div>
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
      <div className="flex px-4 py-6">
        <button className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#f0c674] text-[#0d1117] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#ffd700] transition-colors">
          <span className="truncate">Experience Premium Service</span>
        </button>
      </div>
    </main>
  );
}
