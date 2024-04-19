import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import Card from "./components/DynamicCard";
import WordList from "./components/DynamicWordList";
import QRCode from "./components/QRCode";
import {
  defaultWordListLoader,
  wordListLoader,
} from "./loaders/wordListLoaders";

const App: React.FC = () => {
  const rootPath = "/bingo-frontend";

  const router = createBrowserRouter([
    {
      path: rootPath,
      loader: defaultWordListLoader,
      element: <Card />,
    },
    {
      path: rootPath,
      element: <ContentLayout />,
      children: [
        {
          path: "word_list",
          element: <WordList />,
          loader: defaultWordListLoader,
        },
        {
          path: "qr_code",
          element: <QRCode />,
        },
      ],
    },
    {
      path: `${rootPath}/:lang/:wordListName`,
      loader: wordListLoader,
      element: <Card />,
    },
    {
      path: `${rootPath}/:lang/:wordListName`,
      loader: wordListLoader,
      element: <ContentLayout />,
      children: [
        {
          path: "word_list",
          element: <WordList />,
          loader: wordListLoader,
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
