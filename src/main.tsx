import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/main.scss"
import App from "./App"
import { ThemeProvider } from "./context/ThemeProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
