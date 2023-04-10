const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((e) => (
      <Link className='card' key={e.id} href={`/events/${e.id}`} passHref>
          <div className="img" >
            <Image width={500} height={400} src={e.image} alt={e.title} />
          </div>
        <div className="content" >
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
