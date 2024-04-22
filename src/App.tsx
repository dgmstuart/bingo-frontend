import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import Card from "./components/DynamicCard";
import WordList from "./components/DynamicWordList";
import QRCode from "./components/QRCode";
import { defaultConfigLoader, configLoader } from "./loaders/configLoaders";

const App: React.FC = () => {
  const rootPath = "/bingo-frontend";

  const router = createBrowserRouter([
    {
      path: rootPath,
      loader: defaultConfigLoader,
      element: <Card />,
    },
    {
      path: rootPath,
      element: <ContentLayout />,
      children: [
        {
          path: "word_list",
          element: <WordList />,
          loader: defaultConfigLoader,
        },
        {
          path: "qr_code",
          element: <QRCode />,
        },
      ],
    },
    {
      path: `${rootPath}/:gameName`,
      loader: configLoader,
      element: <Card />,
    },
    {
      path: `${rootPath}/:gameName`,
      loader: configLoader,
      element: <ContentLayout />,
      children: [
        {
          path: "word_list",
          element: <WordList />,
          loader: configLoader,
        },
        {
          path: "qr_code",
          element: <QRCode />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
