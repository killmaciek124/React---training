// OLD FILE:
// import { Link } from "react-router-dom";
// const DUMMY_EVENTS = [
//   { id: "p1", title: "Event 1" },
//   { id: "p2", title: "Event 2" },
//   { id: "p3", title: "Event 3" },
//   { id: "p4", title: "Event 4" },
//   { id: "p5", title: "Event 5" },
// ];

// const EventsPage = () => {
//   return (
//     <ul>
//       {DUMMY_EVENTS.map((event) => (
//         <li id={event.id}>
//           <Link to={`/events/${event.id}`}>{event.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default EventsPage;
import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { json, defer, useLoaderData, Await } from "react-router-dom";
// useLoaderData, POTRZEBUJEMY GDY UZYWAMY W NASZYM ROUTINGU FETCHA (REQUEST)
// ... W JAKIMS KOMPONENCIE I CHCEMY ZEBY NAM FETCHOWALO TYLKO WTEDY KIEDY TAM WEJDZIEMY

const EventsPage = () => {
  const { events } = useLoaderData(); // dane w returnie z loadera
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};
export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 }); // kiedy uzywamy throw to wyswietli
    // .. nam sie errorElement ktory jest najblizej tego elementu na drzewku routingowym
    //... (mozemy uzywac jednego errorElement w roocie dla wszystkich elementow np)
  } else {
    const resData = await response.json();
    return resData.events;
    // const resData = await response.json();
    // return resData.events; // mamy dostep do resData w <EventsPage/> albo wszedzie
    // resData.events bo jest tam pod .elements wlasciwie elementy jakies
    // i w pliku Events.js (<EventsPage/>) bierzemy te dane za pomoca loadera
  }
}

export function loader() {
  // loader jest po to ze jak zaladujemy ten 'element' to wykonuje sie ta funkcja loadera
  return defer({
    events: loadEvents(), // loadEvents zwraca promise
  });
}
