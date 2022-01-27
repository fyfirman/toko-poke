import ReactDom from "react-dom";
import Modal from "react-modal";
import App from "./App";

Modal.setAppElement("#app");

ReactDom.render(<App />, document.getElementById("app"));
