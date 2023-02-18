import useSession from "../hooks/useSession";
import shuffle from "../lib/shuffle";
import type { CellData, CellClickHandler } from "../components/Cell";
import type { ButtonClickHandler } from "../clickHandler";

type GetterSetters = [
  CellData[],
  (index: number, stamped: boolean) => CellClickHandler,
  ButtonClickHandler,
  ButtonClickHandler
];

const useCard = (wordList: string[]): GetterSetters => {
  const newWords = (): string[] => shuffle(wordList).slice(0, 25);

  const newCellDataList = function (): CellData[] {
    return newWords().map((word) => {
      return { word: word, stamped: false };
    });
  };

  const [cellDataList, setCellDataList] =
    useSession<CellData[]>(newCellDataList);

  const setStamped = (index: number, stamped: boolean): void => {
    setCellDataList(
      cellDataList.map((cellData, cellDataIndex) => {
        if (index === cellDataIndex) {
          return { ...cellData, stamped: stamped };
        } else {
          return cellData;
        }
      })
    );
  };

  const toggleStamped = function (
    index: number,
    stamped: boolean
  ): CellClickHandler {
    return () => {
      setStamped(index, !stamped);
    };
  };

  const setNewWords: ButtonClickHandler = () => {
    setCellDataList(newCellDataList());
  };

  const clearAllCells: ButtonClickHandler = () => {
    setCellDataList(
      cellDataList.map((cellData) => ({ ...cellData, stamped: false }))
    );
  };

  return [cellDataList, toggleStamped, setNewWords, clearAllCells];
};

export default useCard;
