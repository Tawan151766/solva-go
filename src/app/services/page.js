import PageHeader from "../components/layout/PageHeader";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      price: "Starting at $2,500"
    },
    {
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best.",
      features: ["Security Updates", "Content Updates", "Performance Monitoring", "24/7 Support"],
      price: "Starting at $299/month"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Portal"],
      price: "Starting at $3,500"
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing services.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
      price: "Starting at $899/month"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans">
      <PageHeader title="Our Services" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h2 className="text-[#1d180c] text-3xl font-bold mb-4">
            Professional Web Solutions
          </h2>
          <p className="text-[#a18745] text-lg max-w-2xl mx-auto">
            We offer comprehensive web services to help your business succeed online. 
            From development to maintenance, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae1cd] hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-[#1d180c] text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#a18745] text-base mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#1d180c] font-semibold mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-[#a18745] text-sm flex items-center">
                      <span className="text-[#f4af00] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#1d180c] font-bold text-lg">
                  {service.price}
                </span>
                <button className="bg-[#f4af00] hover:bg-[#e09e00] text-[#1d180c] font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-[#f4f0e6] rounded-2xl p-8">
          <h3 className="text-[#1d180c] text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-[#a18745] text-base mb-6">
            Contact us today for a free consultation and let's discuss your project.
          </p>
          <button className="bg-[#f4af00] hover:bg-[#e09e00] text-[#1d180c] font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Free Quote
          </button>
        </div>
      </main>
    </div>
  );
}
