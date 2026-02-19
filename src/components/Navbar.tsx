import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Links Section */}
        <ul className="flex items-center gap-4 sm:gap-8 font-medium text-slate-600 text-sm sm:text-base">
          <li>
            <a
              href="#hero"
              className="hover:text-ubuntu-orange transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-ubuntu-orange transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-ubuntu-orange transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
