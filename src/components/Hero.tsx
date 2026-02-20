export default function Hero() {
  return (
    // 1. min-h-[80vh] makes it take up most of the screen
    // 2. flex items-center provides vertical centering
    <section
      id="hero"
      className="min-h-[80vh] flex items-center pt-20 pb-10 px-6 bg-white"
    >
      <div className="container mx-auto max-w-5xl text-center">
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

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 mx-auto">
          Pragmatic Digital builds lean, scalable software solutions designed
          for the real world. We start with your business problem, not a price
          tag, delivering high performance software and websites that work as
          hard as you do!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-ubuntu-orange transition-all duration-300 shadow-lg"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
