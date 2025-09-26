import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle.jsx";
import Routs from "./Routs.jsx";
import "./utils/i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"; // ✅ import here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routs />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </>
);
