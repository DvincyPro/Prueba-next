const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

export const HomePage = ({ data }) => (
  <main>
    {data.map((e) => (
      <Link key={e.id} href={`/events/${e.id}`} passHref>
        <div>
          <Image width={200} height={200} src={e.image} alt={e.title} />{" "}
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      </Link>
    ))}
  </main>
);
