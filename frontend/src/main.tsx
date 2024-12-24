import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <App />
      </ApolloProvider>
    </MantineProvider>
  </StrictMode>
);
