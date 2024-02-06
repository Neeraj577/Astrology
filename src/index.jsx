import { createRoot } from "react-dom/client";
import App from "./App";
//import { render } from "react-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
