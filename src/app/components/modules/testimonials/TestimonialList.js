import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    quote: "SolvaGo has been a game-changer for our business. Their team is responsive, professional, and truly cares about our success.",
    name: "Sarah Chen",
    role: "Marketing Director at Innovate Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b436?w=400&h=300&fit=crop&crop=face"
  },
  {
    quote: "We've been with SolvaGo for over a year, and their service has been consistently excellent. Our website is always up-to-date and performing well.",
    name: "David Lee",
    role: "CEO of TechStart Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face"
  },
  {
    quote: "SolvaGo's expertise in web development and maintenance is unmatched. They've helped us grow our online presence significantly.",
    name: "Emily Rodriguez",
    role: "Founder of EcoLiving Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face"
  }
];

export default function TestimonialList() {
  return (
    <div className="space-y-4">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          imageSrc={testimonial.image}
        />
      ))}
    </div>
  );
}
