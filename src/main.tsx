import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Paste the code here
document.addEventListener('contextmenu', (e: MouseEvent) => e.preventDefault());
document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) e.preventDefault();
});



createRoot(document.getElementById("root")!).render(<App />);
