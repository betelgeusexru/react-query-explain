import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Some } from "./Some";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}

        <Routes>
          <Route path="/some" element={<Some />} />
          <Route path="/" element={<App />} />
        </Routes>
      </QueryClientProvider>
    </React.StrictMode>
  </Router>
);
