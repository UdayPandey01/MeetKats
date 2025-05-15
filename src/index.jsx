import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BhoomiLandingPage } from "./screens/BhoomiLandingPage/BhoomiLandingPage";
import EventsPage from "./screens/EventsPage/EventsPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    {/* <BhoomiLandingPage /> */}
    <EventsPage />
  </StrictMode>,
);
