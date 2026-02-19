import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Pragmatic Digital"}</h1>;
}

export default function HomePage() {
  const services = ["New Website Launch February 2026"];
  // const services = ["Custom Software Development", "Website Development"];

  return (
    <div>
      <Header title="Pragmatic Digital" />
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
