export default function Hero() {
  return (
    <section id="hero" className="py-20 lg:py-32 px-6 bg-white">
      <div className="container mx-auto max-w-5xl text-center md:text-left">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-tech-blue leading-[1.1] tracking-tighter mb-6">
          Software <br />
          <span className="text-ubuntu-orange">
            That Just Works
            <span className="font-mono animate-pulse ml-1 [animation-duration:600ms]">
              _
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
          Pragmatic Digital builds lean, scalable software solutions designed
          for the real world. We start with your business problem, not a price
          tag, delivering high performance software and websites that work as
          hard as you do!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-ubuntu-orange transition-all duration-300 shadow-lg"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border hover:bg-ubuntu-orange border-slate-200 hover:bg-slate-50 transition-all"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
