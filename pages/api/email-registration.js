import path from "path";
import fs from "fs";

function buildPath() {
 return path.join(process.cwd(), "data", "data.json");
}
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (method === "POST") {
    const { email, eventId } = req.body;

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          request
            .status(201)
            .json({ message: "This mail has been registered" });
        }
        return {
          ...event,
          email_register: [...event.emails_registered, email],
        };
      }
      return event;
    });
    fs.writeFileSync(filePath,JSON.stringify ({events_categories,allEvents: newAllEvents}))

    if (!allEvents) {
      return res.status(404).json({ message: "Event data not found" });
    }
    res.status(200).json({
      message: `You has been authenticated successfully whith the email address:${email} for the event ${eventId}.`,
    });
  }
}


