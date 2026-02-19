export default function Services() {
  const services: string[] = ["New Website Launch February 2026"];
  // const services = ["Custom Software Development", "Website Development"];
  return (
    <nav id="services" className="p-4 border-b border-gray-100">
      <section>
        <ul className="space-y-3">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 font-medium"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>
      <div className="container mx-auto">Services Placeholder</div>
    </nav>
  );
}
