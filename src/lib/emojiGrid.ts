import type { CellData } from "../components/Cell";
import chunk from "lodash/chunk";

const emojiGrid = function (cellDataList: CellData[]): string {
  const emojiList = cellDataList.map(({ stamped }) => (stamped ? "🟦" : "⬜"));

  const emojiRows = chunk(emojiList, 5).map((row) => row.join(""));
  return emojiRows.join("\n");
};

export default emojiGrid;
