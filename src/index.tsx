import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BhoomiLandingPage } from "./screens/BhoomiLandingPage/BhoomiLandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BhoomiLandingPage />
  </StrictMode>,
);
