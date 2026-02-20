export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Scalable, robust applications tailored to your business logic using modern tech stacks.",
      icon: "💻",
    },
    {
      title: "Custom Website Development",
      description:
        "High performance, SEO friendly websites that turn visitors into loyal customers.",
      icon: "🌐",
    },
    // You can easily add more here later
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our <span className="text-ubuntu-orange">Services</span>
          </h2>
          <p className="text-slate-600 max-w-2xl">
            We combine technical expertise with pragmatic design to deliver
            digital products that actually work for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-ubuntu-orange/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
