import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, Store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#010101",
            color: "#fff",
          },
        }}
      />
    </PersistGate>
  </Provider>
);
