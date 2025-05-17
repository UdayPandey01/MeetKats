import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BhoomiLandingPage } from "./screens/BhoomiLandingPage/BhoomiLandingPage";
import EventsPage from "./screens/EventsPage/EventsPage";
import CreateEventPage from "./screens/CreateEvent/CreateEvent";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    {/* <BhoomiLandingPage /> */}
    <CreateEventPage />
    {/* <EventsPage /> */}
  </StrictMode>,
);
