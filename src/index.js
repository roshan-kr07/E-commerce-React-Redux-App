import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductContextProvider from "./containers/Context/ProductsContext";
// import './index.css'


// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ProductContextProvider>
    
  </React.StrictMode>
);
