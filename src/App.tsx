import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import Card from "./components/Card";
import WordList from "./components/WordList";
import wordList from "./data/teamLindyWordList.json";
import QRCode from "./components/QRCode";
import flattenWordList from "./lib/flattenWordList";

const App: React.FC = () => {
  const flattenedWordList = flattenWordList(wordList);
  const rootPath = "/bingo-frontend";

  const router = createBrowserRouter([
    {
      path: rootPath,
      element: <Card wordList={flattenedWordList} />,
    },
    {
      path: rootPath,
      element: <ContentLayout />,
      children: [
        {
          path: "word_list",
          element: <WordList wordList={wordList} />,
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
