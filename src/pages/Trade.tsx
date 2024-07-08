import { useLocation } from "react-router-dom";

export const Trade = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const symbol = params.get("symbol");

  return <div></div>;
};
