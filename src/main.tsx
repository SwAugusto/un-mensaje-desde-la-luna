import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { ConfigProvider } from "./config-storage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
       <ConfigProvider>
    <App />
    </ConfigProvider>
  </StrictMode>
);
