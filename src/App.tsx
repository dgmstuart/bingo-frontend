import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import Card from "./components/Card";
import WordList from "./components/WordList";
import wordList from "./data/teamLindyWordList.json";
import flattenWordList from "./lib/flattenWordList";

const App: React.FC = () => {
  const flattenedWordList = flattenWordList(wordList);

  const router = createBrowserRouter([
    {
      path: "/bingo-frontend",
      element: <Card wordList={flattenedWordList} />,
    },
    {
      path: "/",
      element: <ContentLayout pageTitle="Full word list" />,
      children: [
        {
          path: "/bingo-frontend/word_list",
          element: <WordList wordList={wordList} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
