/* eslint-disable react/jsx-no-undef */

import Image from "next/image";
import Link from "next/link";
/* eslint-disable jsx-a11y/alt-text */
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} passHref>
          <div>
            <Image src={event.image}alt={event.title}width={300}height={300}/>
            <h2>{event.title}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
