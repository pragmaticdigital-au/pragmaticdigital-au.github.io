"use client";

export default function Contact() {
  const user = "hello";
  const domain = "pragmaticdigital.au";

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // This assembles the email only when a human clicks
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <section id="contact" className="pt-0 pb-20 px-6 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
            <span className="text-tech-blue">Ready to </span>
            <span className="text-ubuntu-orange">build?</span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Whether you have a fully scoped project or just a rough idea on a
            napkin, we're ready to engineer a solution that works.
          </p>

          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Direct Email
            </p>
            {/* Use a button that looks like a link for better security */}
            <button
              onClick={handleEmailClick}
              className="group text-xl md:text-3xl font-black text-tech-blue hover:text-ubuntu-orange transition-all break-all sm:break-normal cursor-pointer"
            >
              {user}
              <span className="text-ubuntu-orange group-hover:text-tech-blue transition-all">
                [at]
              </span>
              {domain}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
