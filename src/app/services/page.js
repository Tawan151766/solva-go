import PageHeader from "../components/layout/PageHeader";

export default function ServicesPage() {
  const services = [
    {
      title: "Premium Web Development",
      description: "Bespoke websites crafted with cutting-edge technologies and luxury design principles.",
      features: ["Luxury Design", "Premium SEO", "Elite Performance", "Exclusive Mobile Experience"],
      price: "Starting at $12,500"
    },
    {
      title: "White-Glove Maintenance",
      description: "Exclusive website care with premium security, updates, and concierge-level support.",
      features: ["Enterprise Security", "Priority Updates", "Performance Excellence", "24/7 VIP Support"],
      price: "Starting at $1,299/month"
    },
    {
      title: "Luxury E-commerce Solutions",
      description: "Elite online store experiences with premium payment solutions and sophisticated inventory management.",
      features: ["Premium Payment Gateway", "Advanced Inventory", "Executive Order Tracking", "VIP Customer Portal"],
      price: "Starting at $8,500"
    },
    {
      title: "Elite Digital Marketing",
      description: "Elevate your brand presence with our premium digital marketing and luxury branding services.",
      features: ["Premium SEO", "Luxury Social Media", "Elite Content Marketing", "Executive Analytics"],
      price: "Starting at $2,499/month"
    }
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
            We deliver exclusive digital experiences to elevate your brand with luxury craftsmanship and premium excellence. 
            From bespoke development to white-glove maintenance, we provide unparalleled service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1e40af] rounded-2xl p-6 shadow-sm border border-[#2563eb] hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-white text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#7cb8ff] text-base mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-[#7cb8ff] text-sm flex items-center">
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
                <button className="bg-[#f4af00] hover:bg-[#e09e00] text-[#1045a2] font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-[#1e40af] rounded-2xl p-8">
          <h3 className="text-white text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-[#7cb8ff] text-base mb-6">
            Contact us today for a free consultation and let's discuss your project.
          </p>
          <button className="bg-[#f4af00] hover:bg-[#e09e00] text-[#1045a2] font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Free Quote
          </button>
        </div>
      </main>
    </div>
  );
}
