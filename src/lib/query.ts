import listName from "../lib/listName";

export default () => {
  const queryKey: string | null = listName();
  if (queryKey) {
    return `?list_name=${queryKey}`;
  } else {
    return "";
  }
};
