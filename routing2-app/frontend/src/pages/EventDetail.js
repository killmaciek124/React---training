import { Suspense } from "react";
import {
  defer,
  json,
  Link,
  redirect,
  useRouteLoaderData,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail"); // return z funkcji loader (uzywajac defer)

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading EventS...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>

      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 }); // kiedy uzywamy throw to wyswietli
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.id; // id jest z patha w elemencie w kotrym jest loader i path
  return defer({
    event: await loadEvent(id), // moge uzyc await zeby kontrolowac ktore co kiedy sie renderuje
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.id;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, // "DELETE"
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}

export default EventDetailPage;
