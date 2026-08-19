export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Powerful, scalable software built around your unique business processes, from internal tools and dashboards to custom platforms and web applications.",
      icon: "💻",
    },
    {
      title: "Custom Website Development",
      description:
        "From custom coded websites to WordPress and Squarespace, Pragmatic Digital build fast, modern, SEO friendly websites designed to attract visitors and turn them into customers.",
      icon: "🌐",
    },
    {
      title: "API & Integration Services",
      description:
        "Seamlessly connect your website, apps, CRMs, payment gateways, booking systems, AI tools, and business platforms to automate workflows and keep your data in sync.",
      icon: "🧩",
    },
        {
    title: "SEO & Digital Visibility",
  description:
    "Improve your search rankings, attract more qualified visitors, and grow your online presence with technical, on page, and performance focused SEO.",
  icon: "🔎",
    },
  ];

  return (
    <section id="services" className="pt-10 pb-10 px-6 bg-white">
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
