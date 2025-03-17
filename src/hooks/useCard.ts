import useSession from "../hooks/useSession";
import shuffle, { ArrayTransformation } from "../lib/shuffle";
import type { CellData, CellClickHandler } from "../components/Cell";
import type { ButtonClickHandler } from "../clickHandler";

type GetterSetters = [
  CellData[],
  (index: number, stamped: boolean) => CellClickHandler,
  ButtonClickHandler,
  ButtonClickHandler,
];

const useCard = (
  id: string,
  wordList: string[],
  randomise: boolean,
): GetterSetters => {
  const newWords = (): string[] => orderer()(wordList).slice(0, 25);

  const orderer = (): ArrayTransformation => {
    if (randomise) {
      return shuffle;
    } else {
      return nullOrderer;
    }
  };

  const nullOrderer: ArrayTransformation = (array) => array;

  const newCellDataList = function (): CellData[] {
    return newWords().map((word) => {
      return { word: word, stamped: false };
    });
  };

  const [cellDataList, setCellDataList] = useSession<CellData[]>({
    keyName: `bingoSession-${id}`,
    initFunction: newCellDataList,
  });

  const setStamped = (index: number, stamped: boolean): void => {
    setCellDataList(
      cellDataList.map((cellData, cellDataIndex) => {
        if (index === cellDataIndex) {
          return { ...cellData, stamped: stamped };
        } else {
          return cellData;
        }
      }),
    );
  };

  const toggleStamped = function (
    index: number,
    stamped: boolean,
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
      cellDataList.map((cellData) => ({ ...cellData, stamped: false })),
    );
  };

  return [cellDataList, toggleStamped, setNewWords, clearAllCells];
};

export default useCard;
