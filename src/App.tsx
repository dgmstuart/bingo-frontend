import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import Card from "./components/DynamicCard";
import WordList from "./components/DynamicWordList";
import QRCode from "./components/QRCode";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/bingo-frontend",
      element: <Card />,
    },
    {
      path: "/",
      element: <ContentLayout />,
      children: [
        {
          path: "/bingo-frontend/word_list",
          element: <WordList />,
        },
        {
          path: "/bingo-frontend/qr_code",
          element: <QRCode />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
