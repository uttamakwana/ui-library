// import
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// css
import './styles/utils.css';
import './styles/index.css';
import './styles/reset.css';
import './styles/colors.css';

// variables
const rootElement = document.querySelector("#root")!;

// render App into the #root element
ReactDOM.createRoot(rootElement).render(<App />);