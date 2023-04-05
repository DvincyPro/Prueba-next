/* eslint-disable react/jsx-no-undef */

import Image from "next/image";
/* eslint-disable jsx-a11y/alt-text */
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.map((event) => (
          <a key={event.id} href={`/events/${event.id}`}>
            <Image src={event.image}alt={event.title}width={300}height={300}/>
            <h2>{event.title}</h2>
          </a>
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
