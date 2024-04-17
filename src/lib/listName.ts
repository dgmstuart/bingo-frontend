import { useLocation } from "react-router-dom";

export default () => {
  const queryParams = new URLSearchParams(useLocation().search);
  return queryParams.get("list_name");
};
