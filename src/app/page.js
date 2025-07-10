import Header from "./components/layout/Header";
import PageHeader from "./components/layout/PageHeader";
import CallToAction from "./components/modules/home/CallToAction";
import Hero from "./components/modules/home/Hero";
import HowItWorks from "./components/modules/home/HowItWorks";
import ServicesOverview from "./components/modules/home/ServicesOverview";
import Testimonials from "./components/modules/home/Testimonials";
import WhyChoose from "./components/modules/home/WhyChoose";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col bg-[#1045a2] justify-between overflow-x-hidden font-["Work Sans","Noto Sans",sans-serif]'>
      <PageHeader title="Home" /> <Hero />
      <ServicesOverview />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
