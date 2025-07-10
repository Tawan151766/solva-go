import PageHeader from "../components/layout/PageHeader";

export default function ServicesPage() {
  const services = [
    {
      title: "Premium Web Development",
      description:
        "Bespoke websites crafted with cutting-edge technologies and luxury design principles.",
      features: [
        "Luxury Design",
        "Premium SEO",
        "Elite Performance",
        "Exclusive Mobile Experience",
      ],
      price: "Starting at $12,500",
    },
    {
      title: "White-Glove Maintenance",
      description:
        "Exclusive website care with premium security, updates, and concierge-level support.",
      features: [
        "Enterprise Security",
        "Priority Updates",
        "Performance Excellence",
        "24/7 VIP Support",
      ],
      price: "Starting at $1,299/month",
    },
    {
      title: "Luxury E-commerce Solutions",
      description:
        "Elite online store experiences with premium payment solutions and sophisticated inventory management.",
      features: [
        "Premium Payment Gateway",
        "Advanced Inventory",
        "Executive Order Tracking",
        "VIP Customer Portal",
      ],
      price: "Starting at $8,500",
    },
    {
      title: "Elite Digital Marketing",
      description:
        "Elevate your brand presence with our premium digital marketing and luxury branding services.",
      features: [
        "Premium SEO",
        "Luxury Social Media",
        "Elite Content Marketing",
        "Executive Analytics",
      ],
      price: "Starting at $2,499/month",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] font-sans">
      <PageHeader title="Premium Services" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h2 className="text-[#f0c674] text-3xl font-bold mb-4">
            Luxury Digital Solutions
          </h2>
          <p className="text-[#f0c674] text-lg max-w-2xl mx-auto">
            We offer comprehensive web services to help your business succeed
            online. From development to maintenance, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg @xl:flex-row @xl:items-start bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10 transition-colors p-6 "
            >
              <h3 className="text-[#f0c674] text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#f0c674] text-base mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-[#f0c674] font-semibold mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-[#f0c674] text-sm flex items-center"
                    >
                      <span className="text-[#f4af00] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-lg">
                  {service.price}
                </span>
                <button className="h-12 px-5 rounded-lg bg-[#f0c674] text-[#0d1117] font-bold hover:bg-[#ffd700] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
