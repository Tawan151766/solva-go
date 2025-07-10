import { PlanCard } from "../components/modules/service/PlanCard";

const plans = [
  {
    title: "Basic Go",
    subtitle: "Essential Website Care",
    description:
      "Ideal for small businesses needing a reliable online presence. Includes core maintenance and security.",
    price: "$99/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNT3pPdUp6x2wJOuNi8dXtgUTYUdK-FR-SgOaMzHd29Id8ygKlCqHrb8ifdiHmQE9W87_HfpPYJzdIen7Y7ovVJGxiBLycRphSSYRboIDXvIrZbRn0B6LPz6UtqtLGfQXrmRkrI7xL-_UtuIfsnrOC4WMTKPH0WFW7LK-Aw-5T1IDHo--jT8XaLk5XBzITQZIutR8xIYUJFezK7tc3qPXsQT_aPO0kRJBjezsFDxuFRf7SbdOBYASHdzVuxj8sqQcZ2yNr05RfX3A",
  },
  {
    title: "Business Go",
    subtitle: "Enhanced Website Management",
    description:
      "Perfect for growing businesses requiring more advanced features and support.",
    price: "$199/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSj4par_zIaS2W8yJihLCPG2vUU8ZVFUk4oeMPDShlFtJliPJi6WR2vvLsdj-f_8rBLklOoSx4NSaPnwFGj-kh54sZQrey0HqsNfbYTUMW2NlZdGaxKmq1MClhVZBLHF7-2KweFYIMywIVK_mQ5Z6mV06WGhEhc5DQvtS5kag80Xq8F_M2Wk1gGI27fnfIAb1MMtwqBkh0NlIRWf24PojXx339Wq62jnHtrr3Pkj7_0ZaZaJ1RFiJz3FOM07ZiJ79KdJcYY3Dl7VM",
  },
  {
    title: "Premium Go",
    subtitle: "Comprehensive Website Solution",
    description:
      "Best for established businesses seeking top-tier performance, security, and dedicated support.",
    price: "$299/mo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT_WdGzsdw32SDi4jk1tcbi1iSnvYFsY_XVZtuukb8XlsHTp2HygUde9sF_hQkekYtde6L8lpagozO-9KKYODRLanG4QoEHIF13CeQ2bH-7jYeJKVd3sQgaSkGXFiIkFwI39sOn9b27k6XBsa9VTzM0JfVLbzt6b7M9yA7Srp_Z2h7Q6SMB_oA9I4Tg5qGbLKlD9chXeSGvg3ZlWWj7sGuw2dprZctvl63CRQxy0EaHRLIS7qGXjlSG2A7ajIzVfgXk6QawjSUB5U",
  },
];

export default function ServicePage() {
  return (
    <main className="bg-[#fcfbf8] min-h-screen">
      <div className="px-4 pt-6 pb-3">
        <h2 className="text-[#1d180c] text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Select a plan
        </h2>
      </div>
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
      <div className="flex px-4 py-6">
        <button className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#f4af00] text-[#1d180c] text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Choose This Plan</span>
        </button>
      </div>
    </main>
  );
}
