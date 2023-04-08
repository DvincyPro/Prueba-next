
const EventPage = ({data}) => {
    // console.log(data);
  return (
    <div>
        <Image src={data.image} width={1000} height={500} alt = {data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
  );
};

export default EventPage;
import Image from "next/image";

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
//   console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((e) => id === e.id);
  return {
    props: {data: eventData},
  };
}
