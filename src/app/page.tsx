import LikeButton from "./like-button";

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return <h1>{title ? title : "Pragmatic Digital"}</h1>;
}

export default function HomePage() {
  const services: string[] = ["New Website Launch February 2026"];
  // const services = ["Custom Software Development", "Website Development"];

  return (
    <main>
      <Header title="Pragmatic Digital" />
      <section>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
      <LikeButton />
    </main>
  );
}
