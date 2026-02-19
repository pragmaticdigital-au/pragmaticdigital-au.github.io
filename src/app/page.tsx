import LikeButton from "./like-button";

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <h1 className="text-4xl md:text-6xl font-black tracking-widest mb-4">
      <span className="text-ubuntu-orange">Pragmatic</span> {"  "}
      <span className="text-tech-blue">Digital</span>
      <span className="text-ubuntu-orange">&gt;</span>
    </h1>
  );
}

export default function HomePage() {
  const services: string[] = ["New Website Launch February 2026"];
  // const services = ["Custom Software Development", "Website Development"];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <Header title="Pragmatic Digital" />
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
      {/* <LikeButton /> */}
    </main>
  );
}
