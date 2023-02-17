import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
import { register } from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import WordList from "./components/WordList";
import wordList from "./wordList.json";

const router = createBrowserRouter([
  {
    path: "/bingo-frontend",
    element: <Card />,
  },
  {
    path: "/",
    element: <ContentLayout pageTitle="Full word list" />,
    children: [
      {
        path: "/word_list",
        element: <WordList wordList={wordList} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

register();
