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
  ];

  return (
    <section id="services" className="pt-10 pb-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header - Centered */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-tech-blue mb-4 tracking-tighter">
            Our <span className="text-ubuntu-orange">Services</span>
          </h2>
          {/* mx-auto added here to center the paragraph container */}
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We combine technical expertise with pragmatic design to deliver
            digital products that actually work for your business.
          </p>
        </div>

        {/* Grid - Centered and Max-Width restricted for better readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-ubuntu-orange/30 hover:shadow-xl transition-all duration-300 text-center md:text-left"
            >
              {/* Icon centered for mobile/tablet */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
