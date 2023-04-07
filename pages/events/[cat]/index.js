import Image from "next/image";
import Link from "next/link";

import React from "react";

const EventsCatPage = ({ data, pageName }) => {
  if (!data || !data.length) {
    return <div>No events found</div>;
  }

  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((e) => (
        <Link key={e.id} href={`/events/${e.city}/${e.id}`} passHref>
          <div>
            <Image width={200} height={200} src={e.image} alt={e.title} />
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </div>
        </Link>
        
      ))}
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id,
      },
    };
  });
 
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  if (!allEvents || !allEvents.length) {
    return {
      notFound: true,
    };
  }

  const data = allEvents.filter((event) => event.city === id);

  return { props: { data, pageName: id } };
}
