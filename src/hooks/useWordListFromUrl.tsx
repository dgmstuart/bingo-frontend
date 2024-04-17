import listName from "../lib/listName";
import useWordListLoader from "../hooks/useWordListLoader";

export default () => {
  return useWordListLoader(listName());
};
