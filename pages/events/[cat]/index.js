/* eslint-disable @next/next/no-html-link-for-pages */
const EventsCatPage = () => {
  return (
    <div>
      <h1>Events in Londom</h1>
      <a href="/events/london/ev1">Event 1</a>
      <br />
      <a href="/events/sanFrancisco">Event 2</a>
      <br />
      <a href="/events/barcelona">Event 3</a>
      <br />
      <a href="/events/madrid">Event 4</a>
      <br />
      <a href="/events/habana">Event 5</a>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((event) => event.city === id);
  
console.log(data);
  return { props: {} };
}
