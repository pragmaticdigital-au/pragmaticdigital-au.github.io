export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Pragmatic Digital
          </h3>
          <p className="text-sm leading-relaxed">
            Engineered in Melbourne. Deployed across Australia.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-ubuntu-orange">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-ubuntu-orange">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ubuntu-orange">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social/Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            {/* Add Icons here */}
            <a
              href="https://www.linkedin.com/company/pragmatic-digital-au/"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            {/* <a href="#" className="hover:text-white">
              GitHub
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        © {new Date().getFullYear()} Pragmatic Digital. All rights reserved.
      </div>
    </footer>
  );
}
